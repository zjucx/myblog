import Vue from 'vue'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import NavBar from './components/NavBar.vue'

import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.use(ElementUI)

// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router,
  store,
  components: {
    navbar: NavBar,
  }
  // render: h => h(App)
}).$mount('#app')
