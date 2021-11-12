# vue-ts-jest

Sample (Vue2 project with Typescript)[https://br.vuejs.org/v2/guide/typescript.html] and Jest

## Why this repo?
The @vue/cli create does not add jest support to the projects.
To add jest (with ts-jest), what had to be done:

### Add jest and ts-jest dependencies
```
npm i jest@26 ts-jest@26 @types/jest@26  @vue/cli-plugin-typescript --save-dev
```

### Add babel-core bridge
```
npm i babel-core@7.0.0-bridge.0 --save-dev
```

### Jest config
Created *jest.config.js* file with the desired configuration. It could be placed in package.json inside a "jest" key, too.

### Test script
Added a test script in package.json
```
"test": "jest"
```