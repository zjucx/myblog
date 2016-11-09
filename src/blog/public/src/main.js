import Vue from 'vue'
import App from './App.vue'
import NavBar from './components/NavBar.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#navbar-zjucx',
  render: h => h(NavBar)
})
