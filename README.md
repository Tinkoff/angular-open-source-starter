# Angular Open-source Starter

## How to use

> This is a starter project for creating open-source libraries for Angular.
> It is a full fledged Angular workspace with demo application and easy library addition.
> It is designed to be used for open-sourcing libraries on Github and has everything
> you'd need ready for CI, code coverage, SSR testing, StackBlitz demo deployment and more.

1. Run `npm i` to install everything

2. Run `npm run add [your-library-name]` to create basic file structure

3. Fill in `projects/[your-library-name]/package.json` metadata for your newly generated library

4. Updated root `package.json` metadata to represent your project

5. Code your library and create demo for it

## Cool features

1.  Versioning is ready for you with following simple commands:

    ```json
        "release": "standard-version",
        "release:patch": "npm run release -- --release-as patch",
        "release:minor": "npm run release -- --release-as minor",
        "release:major": "npm run release -- --release-as major",
        "publish": "npm run build:all && npm publish:all"
    ```

    Just use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
    format and `CHANGELOG.md` will be automatically generated on releases by
    [Standard Version](https://github.com/conventional-changelog/standard-version#standard-version).

2.  This project has Angular Universal —
    you can easily test your library with SSR and Prerender:

    `npm run start:ssr` or `npm run start:prerender`

3.  CI and code coverage are ready, configured to use
    [Travis](http://travis-ci.org/) and [Coveralls](https://coveralls.io).
    Just authorize on [Travis](http://travis-ci.org/) with your Github account
    and enable your repository. If you want to have more than one library in
    your workspace add `COVERALLS_PARALLEL=true` to [Travis](http://travis-ci.org/)
    Environmental variables.

4.  Precommit checks, prettier, linter and all that jazz is there.

5.  You can also deploy your demo to [StackBlitz](https://stackblitz.com) with no hustle,
    just use link in the following format:

        `https://stackblitz.com/github/[User|Organization]/[Repository]/tree/master/projects/demo`

6.  You can add more libraries using the same `npm run add` command to create a whole Angular Workspace
    with multiple libraries. Versioning and publishing is configured that they are released simultaneously like Angular packages.
