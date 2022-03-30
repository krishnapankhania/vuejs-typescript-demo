# Vue-typescript-demo

Demo : [https://vue-typescript-demo.herokuapp.com](https://vue-typescript-demo.herokuapp.com)

## Dependencies 

- @pinia/testing: ^0.0.10
- @vuelidate/core: ^2.0.0-alpha.39
- @vuelidate/validators: ^2.0.0-alpha.28
- pinia: ^2.0.11
- vue: ^3.2.31
- vue-router: ^4.0.12

## Notes 

- For dummy login details check src/assets/users.ts file or use email `krishna@abc.com` and password `sample123`
- Tests are under src/components/__tests__ folder
- Use of composition api is there for each components


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
