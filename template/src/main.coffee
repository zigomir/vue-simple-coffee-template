Vue = require 'vue'
App = require './components/App.coffee'

new Vue
    el: '#app'
    components:
        App: App
