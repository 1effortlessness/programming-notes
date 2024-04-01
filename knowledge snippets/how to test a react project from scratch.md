# How to test a React vite project from scratch

## Startup

[install vitest](https://vitest.dev/guide/) first, it's the test runner, provide the basic setup for testing a vite project. so do it first.

```shell
npm install -D vitest
```

set a [global jsdom testing environment](https://vitest.dev/config/#environment), so that we can use the browser api in our test cases.

```javascript
// vitest.config.js
{
  test: {
    globals: true,
    environment: 'jsdom'
  }
}
```

> if eslint lint error occurs that the var isn't defined [un-def]
> try this: https://github.com/saqqdy/eslint-plugin-vitest-globals


add testing-library/react

```shell
npm install --save-dev @testing-library/react
npm install -D @testing-library/jest-dom
```

add `vitest.setup.js` and import it in `vitest.config.js`

```javascript
import '@testing-library/jest-dom' // The goal is to using all the matchers from jest-dom
```

```javascript
```
then add the setup file to the vitest config file

```javascript
// vitest.config.js
{
  test: {
    setupFiles: ['./vitest.setup.js']
  }
}
```
after that, we can start writing our test cases.

## Component test

Before you begin, ensure that you have a thorough understanding of how to write a React test case. Alternatively, you can read this article first: <https://kentcdodds.com/blog/testing-implementation-details>.
