{ expect } = require 'chai'
Vue        = require 'vue'
App        = require '../App.coffee'

describe 'App', ->
  # TODO: extract boilerplate
  beforeEach ->
    # Create a placeholder for Vue App element
    appElement = document.createElement 'app'
    appElement.id = 'app'
    document.getElementById('mocha').appendChild appElement

    @vm = new Vue
      el         : '#mocha'
      components : { App }

  afterEach ->
    @vm.$destroy(no)
    window.app.remove() # Clean up the DOM

  it 'renders template', ->
    expect(window.app.innerHTML).to.have.string('Hello Coffee')
    expect(window.app.innerHTML).to.have.string('Counter: 0')

  it 'reacts to click', (done) ->
    expect(window.app.innerHTML).to.have.string('Counter: 0')
    @vm.$children[0].countUp() # TODO: don't rely on first child here?

    Vue.nextTick ->
      expect(window.app.innerHTML).to.have.string('Counter: 1')
      done()
