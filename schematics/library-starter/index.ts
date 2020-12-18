import {strings} from '@angular-devkit/core';
import {dasherize} from '@angular-devkit/core/src/utils/strings';
import {
    apply,
    mergeWith,
    Rule,
    SchematicContext,
    template,
    Tree,
    url,
} from '@angular-devkit/schematics';

export interface Schema {
    readonly name: string;
}

const DEMO_PACKAGE_JSON_PATH = 'projects/demo/package.json';
const TSCONFIG_JSON_PATH = 'tsconfig.json';
const ANGULAR_JSON_PATH = 'angular.json';
const PACKAGE_JSON_PATH = 'package.json';

export function libraryStarter(options: Schema): Rule {
    return (tree: Tree, context: SchematicContext) => {
        const {name} = options;
        const dasherizedName = dasherize(name);
        const sourceTemplates = url('./files');
        const sourceParametrizedTemplates = apply(sourceTemplates, [
            template({
                ...options,
                ...strings,
            }),
        ]);

        updateDemoPackage(tree, dasherizedName);
        updateTSConfig(tree, dasherizedName);
        updateAngular(tree, dasherizedName);
        updatePackage(tree, dasherizedName);

        return mergeWith(sourceParametrizedTemplates)(tree, context);
    };
}

function updateDemoPackage(tree: Tree, name: string) {
    const packageJson: Buffer | null = tree.read(DEMO_PACKAGE_JSON_PATH);
    const packageObject = JSON.parse(String(packageJson));
    const {dependencies} = packageObject;

    dependencies[name] = 'latest';

    tree.overwrite(DEMO_PACKAGE_JSON_PATH, JSON.stringify(packageObject, null, 4));
}

function updateTSConfig(tree: Tree, name: string) {
    const tsconfigJson: Buffer | null = tree.read(TSCONFIG_JSON_PATH);
    const tsconfigObject = JSON.parse(String(tsconfigJson));
    const {compilerOptions} = tsconfigObject;
    const {paths} = compilerOptions;

    paths[name] = [`projects/${name}/src/public-api`];

    tree.overwrite(TSCONFIG_JSON_PATH, JSON.stringify(tsconfigObject, null, 4));
}

function updateAngular(tree: Tree, name: string) {
    const project = {
        projectType: 'library',
        root: `projects/${name}`,
        sourceRoot: `projects/${name}/src`,
        architect: {
            build: {
                builder: '@angular-devkit/build-ng-packagr:build',
                options: {
                    tsConfig: `projects/${name}/tsconfig.lib.json`,
                    project: `projects/${name}/ng-package.json`,
                },
            },
            test: {
                builder: '@angular-devkit/build-angular:karma',
                options: {
                    main: `projects/${name}/src/test.ts`,
                    tsConfig: `projects/${name}/tsconfig.spec.json`,
                    karmaConfig: `projects/${name}/karma.conf.js`,
                    codeCoverage: true,
                    browsers: 'ChromeHeadless',
                },
            },
            lint: {
                builder: '@angular-devkit/build-angular:tslint',
                options: {
                    tsConfig: [
                        `projects/${name}/tsconfig.lib.json`,
                        `projects/${name}/tsconfig.spec.json`,
                    ],
                    exclude: ['**/node_modules/**'],
                },
            },
        },
    };
    const angularJson: Buffer | null = tree.read(ANGULAR_JSON_PATH);
    const angularObject = JSON.parse(String(angularJson));
    const {projects} = angularObject;

    projects[name] = project;

    tree.overwrite(ANGULAR_JSON_PATH, JSON.stringify(angularObject, null, 4));
}

function updatePackage(tree: Tree, name: string) {
    const packageJson: Buffer | null = tree.read(PACKAGE_JSON_PATH);
    const packageObject = JSON.parse(String(packageJson));
    const {scripts} = packageObject;
    const build = `ng run ${name}:build`;
    const buildKey = `build:${name}`;
    const buildAll = scripts['build:all'] || '';
    const buildAllValue = buildAll
        ? `${buildAll} && npm run ${buildKey}`
        : `npm run ${buildKey}`;
    const publish = `npm publish ./dist/${name}`;
    const publishKey = `publish:${name}`;
    const publishAll = scripts['publish:all'] || '';
    const publishAllValue = publishAll
        ? `${publishAll} && npm run ${publishKey}`
        : `npm run ${publishKey}`;
    const newScripts = {
        'build:all': buildAllValue,
        'publish:all': publishAllValue,
        [buildKey]: build,
        [`test:${name}`]: `ng run ${name}:test`,
        [`test:${name}:watch`]: `ng run ${name}:test --watch=true`,
        [publishKey]: publish,
    };

    packageObject['scripts'] = {
        ...scripts,
        ...newScripts,
    };

    tree.overwrite(PACKAGE_JSON_PATH, JSON.stringify(packageObject, null, 4));
}
