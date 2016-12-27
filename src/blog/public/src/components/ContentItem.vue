<template>
<div class='item-zjucx'>
  <!-- Page Layout here -->
  <div class="sLDTkb" >Trending on Google+</div>
  <el-row>
    <el-col>
      <el-card :body-style="{ padding: '0px' }">
        <!-- <center> -->
          <img src="../assets/logo.png" class="image">
        <!-- </center> -->
        <div style="padding: 14px;">
          <span>Yummy hamburger jjjjjjjjjjjj  aofeijf   afjejfe af wea f aeiwo jioaiegegeegawgawga  aewfawfawehfiaeofewfwe</span>
          <div class="bottom clearfix">
            <!-- <time class="time">{{ currentDate }}</time> -->
            <i class="fa fa-tags fa-lg" aria-hidden="true">:</i>
            <el-tag>Tag One</el-tag>
            <el-tag type="gray">Tag Two</el-tag>
            <el-tag type="primary">Tag Three</el-tag>
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
  /*margin: 0 auto;*/
  /*text-align: left;*/
  width: 80%;
  /*text-align: center;*/
  border-bottom: 1px solid #eeeeee;
}
.sLDTkb {
    color: #616161;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 14px 16px 6px;
    text-align: left;
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
    width: 200px;
    display: block;
    padding-left: 100px;
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
