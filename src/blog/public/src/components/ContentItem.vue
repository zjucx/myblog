<template>
<div id='item-zjucx' class="white z-depth-5">
  <!-- Page Layout here -->
  <div class="row header">
    <div class="s1">
    <!-- Grey navigation panel -->
    <a href="#"><img src="../assets/h1.png" alt="hehe"/></a>
    </div>
    <!-- Teal page content -->
    <div class="s1" style="padding-left:10px">
    <span>name</span>
    </div>
    <!-- <div class="s1"> -->
    <!-- </div> -->
    <div class="s1">
    <i class="fa fa-caret-right" aria-hidden="true" style="padding-left:5px;padding-right:5px"></i>
    <span>hehe</span>
    </div>
    <div class="placehold" style="width:400px"></div>
    <div class="s1">
      <a href="#"><i class="fa fa-expand"></i></a>
      <a href="#"><i class="fa fa-pencil-square-o fa-lg"></i></a>
    <!-- Teal page content -->
    </div>
  </div>
  <div class="row content">
    <div class="col s12">
    <!-- Grey navigation panel -->
    </div>
  </div>
  <div class="row image">
    <div class="col s2">
    <!-- Grey navigation panel -->
    </div>
  </div>
  <div class="row like">
    <div class="col s1">
      <a href="#"><i class="fa fa-home fa-lg"></i></a>
    <!-- Grey navigation panel -->
    </div>
    <div class="col s1">
      <a href="#"><i class="fa fa-home fa-lg"></i></a>
    <!-- Grey navigation panel -->
    </div>
    <div class="col s1 offset-s10">
      <a href="#"><i class="fa fa-home fa-lg"></i></a>
    <!-- Grey navigation panel -->
    </div>
    <div class="col s1 offset-s11">
      <a href="#"><i class="fa fa-home fa-lg"></i></a>
    <!-- Grey navigation panel -->
    </div>
    <div class="row comments">
      <div class="col s1">
        <a href="#"><i class="fa fa-home fa-lg"></i></a>
      <!-- Grey navigation panel -->
      </div>
      <div class="col s10">
      <!-- Grey navigation panel -->
      </div>
      <div class="col s1">
        <a href="#"><i class="fa fa-home fa-lg"></i></a>
      <!-- Grey navigation panel -->
      </div>
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
img {
  -webkit-border-radius: 50%;
  border-radius: 50%;
  display: block;
  height: 45px;
  width: 45px;
}
span{
  font-size:20px;
  font-weight: 500;
  text-shadow: 0 0 2px #fff, 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #ff00de, 0 0 4px #ff00de;
}
.row {
  padding-left: 20px;
  padding-right: 20px;
}
.header {
  padding: 20px;
  display: flex;
  align-items: center;
  -webkit-box-align: center;

}
.s1{
  display: flex;
  align-items:center;
}
.s1 > a {
  padding-left: 10px;
}
.content {
  padding-bottom: 20px;
}
.row.like {
  padding-left: 10px;
  padding-right: 10px;
}
</style>
