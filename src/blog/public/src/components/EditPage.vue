<template>
  <div id="publish">
      <!-- <navbar></navbar> -->
      <!-- <articleList></ArticleList> -->
      <markDown></markDown>
  </div>

</template>

<script>
// import NavBar from './NavBar.vue'
import MarkDown from './MarkDown.vue'
// import ArticleList from './ArticleList.vue'
// import PicBar from './articleList.vue'
export default {
  name: 'editPage',
  components: {
    // navbar: NavBar,
    markDown: MarkDown,
    // articleList: ArticleList
  }

}
</script>

<style>
#publish {
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding-left: 45px;
  /*overflow-y: hidden;*/
}
</style>
