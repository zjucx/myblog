import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Publish from './components/Publish.vue'

// new Vue({
//   // router,
//   render: h => h(App)
// }).$mount('#app')

const routes = {
  '/': App,
  '/publish': Publish
}
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
