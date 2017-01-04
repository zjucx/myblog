<template>
<div class='navbar-zjucx'>
<div class="dropdown">
  <el-tooltip class="item" effect="dark" content="Home" placement="left">
    <a href="/#/"><i class="fa fa-home fa-lg"></i></a>
  </el-tooltip>
  <el-tooltip class="item" effect="dark" content="Login" placement="left">
  <a href="/#/login"><i class="fa fa-th fa-fw fa-lg"></i></a>
  </el-tooltip>
  <el-tooltip class="item" effect="dark" content="Publish" placement="left">
  <a href="/#/edit"><i class="fa fa-pencil fa-fw fa-lg"></i></a>
  </el-tooltip>
  <a href="#"><i class="fa fa-search fa-fw fa-lg"></i></a>
  <a href="#"><i class="fa fa-mobile fa-fw fa-lg"></i></a>
  </div>
<div class="nav-user">
  <a href="#"><i class="fa fa-user fa-fw fa-lg"></i></a>
  <a href="#"><i class="fa fa-users fa-fw fa-lg"></i></a>
  <a href="#"><i class="fa fa-bell fa-fw fa-lg"></i></a>
  <a href="#"><i class="fa fa-bookmark fa-fw fa-lg"></i></a>
  <a href="#"><i class="fa fa-sign-out fa-fw fa-lg"></i></a>
</div>
</div>
</template>

<script>
export default {
  name: 'navbar',
  mounted() {
		// this.$el.querySelector('.tooltipped').tooltip({delay: 50});
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-zjucx {
  position: fixed;
  width: 45px;
  z-index: 1049;
  -webkit-backface-visibility: hidden;
  left: 0;
  top: 0;
  height: 100%;
  background: #2a2a2a;
  overflow: hidden;
  text-align: center;
}
.navbar-zjucx a {
    display: block;
    padding: 10px;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: #42b983;
}
.dropdown {
    /*padding-top: 20px;*/
    position: relative;
}
.nav-user {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 5px;
}
</style>
