<template>
  <div id="app" class="grey lighten-3">
      <!-- <navbar></navbar> -->
      <!-- <tagsList></tagsList> -->
      <keep-alive>
        <component :is="tagsList"></component>
      </keep-alive>
      <mainPage></mainPage>
      <!-- <router-view></router-view> -->
  </div>

</template>

<script>
// import NavBar from './components/NavBar.vue'
import MainPage from './components/MainPage.vue'
import TagsList from './components/TagsList.vue'
export default {
  data () {
    return {
      tagsList: 'tagsList'
    }
  },
  // name: 'app',
  components: {
    // navbar: NavBar,
    mainPage: MainPage,
    tagsList: TagsList,
  },
  mounted() {
    this.$store.dispatch('getArticles')
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding-left: 45px;
}

a {
  color: #42b983;
}
</style>
