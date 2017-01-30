Personal Blog using BeeGo and VueJS（二）
=========================
### Introduction
```
使用vuejs、vuex、webpack 2.0等构建个人博客系统。ui框架使用element-ui；编辑器使用[simplemde](https://www.npmjs.com/package/simplemde);[marked](https://www.npmjs.com/package/marked)解析markdown语法。使用[vue-route](http://vuejs.github.io/vue-loader)构建前端路由，与后端路由分离，通过ajax交互。
```

### Using
```
1)创建vue-cli创建webpack工程
  参考链接: http://cn.vuejs.org/v2/guide/
2)调试工程
  npm install
  npm run dev
3)打包前端工程
  npm run build
4)部署前端工程到beego框架
  cp -r dist/* ../view/dist
```

### Implement
#### 修改主页index.html使用vue-route
```
<div id="app">
  <navbar></navbar>
  <router-view></router-view>
</div>
```
#### 设计前端路由路由规则
```
export default new Router({
  // mode: 'history',
  routes: [
    {path: '/', component: ArticlesPage},
    {path: '/edit', component: EditPage},
    {path: '/login', component: Login},
    {path: '/article', component: ArticlePage},
    {path: '/articles', component: ArticlesPage},
  ]
})
```
#### 组件分离
```
实现在src/components文件夹下，通过组件实现前端模块分离。
```
#### 设计model，通过vuex与beego后端数据交互
```
实现在src/store目录下
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    user,
    article
  }
})
```
### Demo show
![](static/img/publish.png)

### Discussing
- [submit issue](https://github.com/zjucx/myblog/issues/new)
- email: 862575451@qq.com
