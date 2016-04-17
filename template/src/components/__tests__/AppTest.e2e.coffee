{ expect } = require 'chai'
Vue        = require 'vue'
App        = require '../App.coffee'

describe 'E2E: App', ->
  beforeEach ->
    @vm = new Vue
      template   : '<div><app v-ref:component></app></div>'
      components : { App }

    @vm.$mount()

  afterEach ->
    @vm.$destroy()

  it 'renders template', ->
    expect(@vm.$el.textContent).to.have.string('Hello Coffee')
    expect(@vm.$el.textContent).to.have.string('Counter: 0')

  it 'reacts to click', (done) ->
    expect(@vm.$el.textContent).to.have.string('Counter: 0')
    @vm.$refs.component.countUp()

    Vue.nextTick =>
      expect(@vm.$el.textContent).to.have.string('Counter: 1')
      done()
