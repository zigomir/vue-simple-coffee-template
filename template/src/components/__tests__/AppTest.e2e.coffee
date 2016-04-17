{ expect } = require 'chai'
Vue        = require 'vue'
App        = require '../App.coffee'

describe 'E2E: App', ->
  getComponent = ->
    return new Vue
      template   : '<div><app v-ref:component></app></div>'
      components : { App }

  it 'renders template', ->
    vm = getComponent().$mount()

    expect(vm.$el.textContent).to.have.string('Hello Coffee')
    expect(vm.$el.textContent).to.have.string('Counter: 0')

  it 'reacts to click', (done) ->
    vm = getComponent().$mount()
    component = vm.$refs.component

    expect(vm.$el.textContent).to.have.string('Counter: 0')
    component.countUp()

    component.$nextTick ->
      expect(vm.$el.textContent).to.have.string('Counter: 1')
      done()
