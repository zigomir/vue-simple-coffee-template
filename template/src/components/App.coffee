Vue = require 'vue'

module.exports = Vue.extend
  template: '''
    <div>
      <h2>Hello Coffee!</h2>
      <span @click="countUp">Counter: \{{ counter }}</span>
    </div>
  '''

  data: ->
    counter: 0

  methods:
    countUp: ->
      @counter++
