<template>
  <div id="publish">
      <!-- <navbar></navbar> -->
      <articalListBar></articalListBar>
      <markDown></markDown>
  </div>

</template>

<script>
// import NavBar from './NavBar.vue'
import MarkDown from './MarkDown.vue'
import ArticalListBar from './ArticalListBar.vue'
// import PicBar from './ArticalList.vue'
export default {
  name: 'publish',
  components: {
    // navbar: NavBar,
    markDown: MarkDown,
    articalListBar: ArticalListBar
  }

}
</script>

<style>
#publish {
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*padding-left: 45px;*/
  /*overflow-y: hidden;*/
}

a {
  color: #42b983;
}
</style>
