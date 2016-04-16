{ expect } = require 'chai'
App        = require '../App.coffee'

describe 'Unit: App', ->
  beforeEach ->
    @app = new App

  it 'increments when calling countUp', ->
    expect(@app.$data.counter).to.equal 0
    @app.countUp()
    expect(@app.$data.counter).to.equal 1
