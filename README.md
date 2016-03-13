# Vue Simple Coffee Template

> A simple Vue, CoffeeScript, Less & Browserify setup.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init zigomir/vue-simple-coffee-template my-project
$ cd my-project
$ npm install
$ npm start
$ open http://localhost:3000
```

## Dependencies breakdown

- `budo` - `browserify` & simple http server combined (https://github.com/mattdesl/budo)
- `coffeeify` - we still love `CoffeeScript`, right?
- `less` - write less, generate more CSS - [development mode for watch](http://lesscss.org/usage/#using-less-in-the-browser)
& reload inside browser (check index.html)
- `vue` - yeah

## Motive

Simpler = Better.

With `CoffeeScript's` `"""` (triple quote) multiline strings we can easily write markup in `.coffee` files so we can get
rid of whole `vueify` package (which also has some other peer dependencies as `babel-core`,
`babel-plugin-transform-runtime`, `babel-preset-es2015`, `babel-preset-stage-2` and `babel-runtime`). - Too much unknown
stuff.

## Deployment with [surge](https://surge.sh/)

```sh
npm install --global surge # only once
npm run build
cd dist
surge
```
