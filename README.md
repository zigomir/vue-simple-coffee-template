# Vue Simple Coffee Template

> A simple Vue, CoffeeScript, Less & Browserify setup.

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

``` bash
$ npm install -g vue-cli
$ vue init zigomir/vue-simple-coffee-template my-project
$ cd my-project
$ mv package.*.json package.json # This is necessary for now
$ npm install
$ npm start
$ open http://localhost:3000
```

## Dependencies breakdown

- `budo` - `browserify` & simple http server combined (https://github.com/mattdesl/budo)
- `coffee` or `babel`
- `postcss` with `autoprefixer` and `cssnano`
- `vue` - yeah

## Split vendor and app builds with cache busting

[Source article](http://blog.revathskumar.com/2016/02/browserify-separate-app-and-vendor-bundles.html)

Because app changes a lot more often than vendor. Let browser cache it.

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
