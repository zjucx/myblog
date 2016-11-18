<template>
  <div id="publish" class="grey lighten-3">
      <navbar></navbar>
      <picbar></picbar>
      <markDown></markDown>
  </div>

</template>

<script>
import NavBar from './NavBar.vue'
import MarkDown from './MarkDown.vue'
import PicBar from './ArticalList.vue'
export default {
  name: 'publish',
  components: {
    navbar: NavBar,
    markDown: MarkDown,
    picbar: PicBar
  }

}
</script>

<style>
#publish {
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding-left: 45px;
}

a {
  color: #42b983;
}
</style>
