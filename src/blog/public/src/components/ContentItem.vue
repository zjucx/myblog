<template>
<div class='item-zjucx'>
  <!-- Page Layout here -->
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/logo.png" class="image">
        <div style="padding: 14px;">
          <span>Yummy hamburger jjjjjjjjjjjj  aofeijf   afjejfe af wea f aeiwo</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">Operating button</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>

</div>
</template>

<script>
export default {
  name: 'contentItem',
  data () {
    return {
      currentDate: new Date(),
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
.time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }

</style>
