import { expect } from 'chai'
import App from '../App.js'

describe('Unit: App', () => {
  beforeEach(function () {
    this.app = new App()
  })

  it('increments when calling countUp', function () {
    expect(this.app.$data.counter).to.equal(0)
    this.app.countUp()
    expect(this.app.$data.counter).to.equal(1)
  })
})
