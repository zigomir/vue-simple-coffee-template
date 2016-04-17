
import { expect } from 'chai'
import Vue from 'vue'
import App from '../App.js'

describe('E2E: App', () => {
  beforeEach(function () {
    // Create a placeholder for Vue App element
    var appElement = document.createElement('app')
    appElement.id = 'app'
    document.getElementById('mocha').appendChild(appElement)

    this.vm = new Vue({
      el: '#mocha',
      components: { App }
    })
  })

  afterEach(function () {
    this.vm.$destroy()
    window.app.remove() // Clean up the DOM
  })

  it('renders template', function () {
    expect(window.app.innerHTML).to.have.string('Hello ES6')
    expect(window.app.innerHTML).to.have.string('Counter: 0')
  })

  it('reacts to click', function (done) {
    expect(window.app.innerHTML).to.have.string('Counter: 0')
    this.vm.$children[0].countUp() // TODO: don't rely on first child here?

    Vue.nextTick(function () {
      expect(window.app.innerHTML).to.have.string('Counter: 1')
      done()
    })
  })
})
