import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import EditPage from '../components/EditPage.vue'
import Login from '../components/Login.vue'
import App from '../App.vue'

// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: App },
//   { path: '/publish', component: Publish },
//   { path: '/login', component: Login },
//   // '/': App,
//   // '/publish': Publish,
//   // '/login': Login
// ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
// const router = new VueRouter({
//   routes // （缩写）相当于 routes: routes
// })

// 4. 创建和挂载根实例。

export default new Router({
  // mode: 'history',
  routes: [
    {path: '/', component: App},
    {path: '/edit', component: EditPage},
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
