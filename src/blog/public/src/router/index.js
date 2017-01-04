import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import ArticlesPage from '../components/ArticlesPage.vue'
import ArticlePage from '../components/ArticlePage.vue'
import EditPage from '../components/EditPage.vue'
import Login from '../components/Login.vue'

// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: ArticlesPage },
//   { path: '/publish', component: Publish },
//   { path: '/login', component: Login },
//   // '/': ArticlesPage,
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
    {path: '/', component: ArticlesPage},
    {path: '/edit', component: EditPage},
    {path: '/login', component: Login},
    {path: '/article', component: ArticlePage},
    {path: '/articles', component: ArticlesPage},
    {
      path: '/console',
      component: ArticlesPage,
      children: [
        {path: '', component: ArticlesPage},
        {path: 'articles', name: 'articles', component: ArticlesPage},
        {path: 'editor', name: 'editor', component: ArticlesPage},
        {path: 'links', name: 'links', component: ArticlesPage},
        {path: 'account', name: 'account', component: ArticlesPage}
      ]
    }
  ]
})
