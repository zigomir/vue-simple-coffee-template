
import { expect } from 'chai'
import Vue from 'vue'
import App from '../App.js'

describe('E2E: App', () => {
  beforeEach(function () {
    this.vm = new Vue({
      template: '<div><app v-ref:component></app></div>',
      components: { App }
    })

    this.vm.$mount()
  })

  afterEach(function () {
    this.vm.$destroy()
  })

  it('renders template', function () {
    expect(this.vm.$el.textContent).to.have.string('Hello ES6')
    expect(this.vm.$el.textContent).to.have.string('Counter: 0')
  })

  it('reacts to click', function (done) {
    expect(this.vm.$el.textContent).to.have.string('Counter: 0')
    this.vm.$refs.component.countUp()

    Vue.nextTick(function () {
      expect(this.vm.$el.textContent).to.have.string('Counter: 1')
      done()
    }.bind(this))
  })
})
