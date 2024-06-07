# example-vue-composition-api

Just another demo example application(s) showing vue3 composition api capabilities. Run separate applications (intentionally, to have clean entry scope) by passing chapter as argument and load up different use cases, features and etc. provided by the api. Have fun experimenting and trying things out.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
# change the chapter with the id of the folder containing the app.
npm run dev --chapter=02
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```