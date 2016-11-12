<template>
<div id='content-zjucx'>
  <!-- Page Layout here -->
  <div class="row grey lighten-3">

  <div class="col s12 m12 l6">
  <!-- Grey navigation panel -->
  <contentItem><contentItem>
  </div>

  <div class="col s12 m12 l6">
  <!-- Teal page content -->
  <img src="../assets/logo.png">
  <h1>{{ msg }}</h1>
  <h2>Essential Links</h2>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
  </div>
  <div class="clear"></div>
</div>
</template>

<script>
import ContentItem from './ContentItem.vue'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    contentItem: ContentItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
    margin-left: 10px;
    margin-right: 10px;
}

.col.s3 {
  height: auto;
  min-height: 1024px;
  background-image: url('../assets/bg.jpg');
}
.clear{
  clear: both;
  height: 0px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
