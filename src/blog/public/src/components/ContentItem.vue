<template>
<div class='item-zjucx'>
  <!-- Page Layout here -->
  <div style="width:600px;margin: 0 auto;">

    <el-row>
      <el-col :span="6"><div class="grid-content bg-purple"><a href="#"><img src="../assets/h1.png" alt="hehe"/></a></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"><p>haha\nhah</p></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>

  </div>
</div>
</template>

<script>
export default {
  name: 'contentItem',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item-zjucx{
  margin: 0 auto;
  border-bottom: 1px solid #eeeeee;
}
img {
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  height: 45px;
  width: 45px;
}
/*span{
  font-size:20px;
  font-weight: 500;
  text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #ff00de, 0 0 4px #ff00de;
}*/

</style>
