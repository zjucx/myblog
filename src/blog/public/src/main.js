import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import Publish from './components/Publish.vue'
import Login from './components/Login.vue'

// new Vue({
//   // router,
//   render: h => h(App)
// }).$mount('#app')

const routes = {
  '/': App,
  '/publish': Publish,
  '/login': Login
}

Vue.use(VueResource)
Vue.use(ElementUI)

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
