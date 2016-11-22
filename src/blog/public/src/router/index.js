import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Publish from '../components/Publish.vue'
import Login from '../components/Login.vue'
import App from '../App.vue'


export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: "archive", component: App},
    {path: '/publish', name: "article", component: Publish},
    {path: '/login', component: Login},
    {
      path: '/console',
      component: App,
      children: [
        {path: '', component: App},
        {path: 'articles', name: 'articles', component: App},
        {path: 'editor', name: 'editor', component: App},
        {path: 'links', name: 'links', component: App},
        {path: 'account', name: 'account', component: App}
      ]
    }
  ]
})
