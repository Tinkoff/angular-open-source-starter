/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
    root: true,
    extends: ['@tinkoff/eslint-config-angular', '@tinkoff/eslint-config-angular/html'],
    ignorePatterns: ['projects/**/test.ts', '*.json', '*.less', '*.md', '*.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: [require.resolve('./tsconfig.eslint.json')],
    },
};
