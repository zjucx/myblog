<template>
<div id='article-list'>
  <!-- <el-col :span="8"> -->
    <el-menu default-active="2" @open="handleOpen" @close="handleClose" style="background-color: #eeeeee;">
      <el-submenu index="1" style="background-color: #eeeeee;">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
    </el-menu>
  <!-- </el-col> -->
</div>
</template>

<script>
export default {
  name: 'articleList',
  data () {
    return {
      paddingLeft: 0,
    }
  },
  mounted() {
		this.$nextTick(function() {
				// window.addEventListener('resize', this.getWindowWidth);
        // this.getWindowWidth()

		})
	},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#article-list {
  position: fixed;
  width: 250px;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 45;
  top: 0;
  overflow-y: hidden;
  height: 100%;
  text-align: left;
  /*margin: 5px*/
}
.el-menu {
  background-color: #eeeeee;
}
.el-submenu{
    background-color: #eeeeee;
}
</style>
