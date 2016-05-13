# Vue Simple Template

> Simple Vue template for vue-cli. babel or coffee, browserify and post-css, testem and mocha with chai (optional).

## Usage

This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).

```sh
npm install -g vue-cli
vue init zigomir/vue-simple-template my-project
cd my-project
mv package.*.json package.json
npm install
npm start
open http://localhost:3000
```

### Testing

```sh
npm test
npm run test:watch
```

## Dependencies breakdown

- `budo` - `browserify` & simple http server combined (https://github.com/mattdesl/budo)
- `coffee` or `babel`
- `postcss` with `autoprefixer` and `cssnano`
- `vue` - yeah
- `testem`, `mocha` and `chai` for testing story with basic unit and e2e test examples

## Testing

- test examples based on [this presentation](http://www.slideshare.net/coulix/vuejs-testing). Thanks the author!
- another good Vue tests available on [vue-select component](https://github.com/sagalbot/vue-select/blob/master/test/unit/Select.spec.js)

## Split vendor and app builds with cache busting

[Source article](http://blog.revathskumar.com/2016/02/browserify-separate-app-and-vendor-bundles.html)

Because app changes a lot more often than vendor. Let browser cache it.

## Motive

Simpler = Better.

With `CoffeeScript's` `"""` (triple quote) multiline strings we can easily write markup in `.coffee` files. Same goes
for ES6 template strings ``` (back tick). Then we don't need whole `vueify` package
(which also has some other peer dependencies as `babel-core`, `babel-plugin-transform-runtime`, `babel-preset-es2015`,
`babel-preset-stage-2` and `babel-runtime`).

## Deployment with [surge](https://surge.sh/)

```sh
npm install --global surge # only once
npm run build
cd dist
surge
```
