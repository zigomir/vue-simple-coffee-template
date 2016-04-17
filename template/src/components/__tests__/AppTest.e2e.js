import { expect } from 'chai'
import Vue from 'vue'
import App from '../App.js'

describe('E2E: App', () => {
  const getComponent = () => {
    return new Vue({
      template: '<div><app v-ref:component></app></div>',
      components: { App }
    })
  }

  it('renders template', () => {
    const vm = getComponent().$mount()

    expect(vm.$el.textContent).to.have.string('Hello ES6')
    expect(vm.$el.textContent).to.have.string('Counter: 0')
  })

  it('reacts to click', (done) => {
    const vm = getComponent().$mount()
    const component = vm.$refs.component

    expect(vm.$el.textContent).to.have.string('Counter: 0')
    component.countUp()

    component.$nextTick(() => {
      expect(vm.$el.textContent).to.have.string('Counter: 1')
      done()
    })
  })
})
