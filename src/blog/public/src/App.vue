<template>
  <div id="app" class="grey lighten-3">
      <navbar></navbar>
      <mainContent></mainContent>
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import MainContent from './components/MainContent.vue'
export default {
  name: 'app',
  components: {
    navbar: NavBar,
    mainContent: MainContent
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding-left: 45px;
}

a {
  color: #42b983;
}
</style>
