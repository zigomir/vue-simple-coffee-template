import Vue from 'vue'

export default Vue.extend({
  template: `
    <div>
      <h2>Hello ES6!</h2>
      <span @click="countUp">Counter: \{{ counter }}</span>
    </div>
  `,

  data () {
    return {
      counter: 0
    }
  },

  methods: {
    countUp () {
      this.counter++
    }
  }
})
