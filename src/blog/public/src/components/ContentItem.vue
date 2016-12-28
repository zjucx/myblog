<template>
<div class='item-zjucx'>
  <!-- Page Layout here -->
  <div class="sLDTkb" >Trending on Google+</div>
  <!-- <el-row>
    <el-col> -->
      <!-- <el-card :body-style="{ padding: '14px' }"> -->
      <div style="padding:14px; border-bottom:solid 2px #fff;">
        <div class="header">
          <el-row :gutter="20">
            <el-col :span="3">
              <!-- <div class="cx-header"> -->
                <img class="cx-header" src="../assets/logo.png">
              <!-- </div> -->
              <div style="padding-left:50px; padding-top:8px;font-size:16px;">zjucx</div>
            </el-col>

            <el-col :span="3" :offset="8">
              <div class="cx-circle">
                <i class="fa fa-share-alt fa-lg cx-fa" aria-hidden="true"></i>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- <center> -->
        <div class="content">
          <img src="../assets/logo.png" class="image">
        </div>
        <!-- </center> -->
        <div style="padding: 14px;">
          <span>Yummy hamburger jjjjjjjjjjjj  aofeijf   afjejfe af wea f aeiwo jioaiegegeegawgawga  aewfawfawehfiaeofewfwe</span>
          <div class="bottom clearfix">
            <el-row :gutter="20">
              <el-col :span="3">
                <div class="cx-circle">
                  <i class="fa fa-thumbs-up fa-lg cx-fa" aria-hidden="true"></i>
                </div>
                <div style="padding-left:50px; padding-top:13px">32</div>
              </el-col>

              <el-col :span="8">
                <!-- <time class="time">{{ currentDate }}</time> -->
                <div>
                <i class="fa fa-tags fa-lg cx-fa" aria-hidden="true">:</i>
                <el-tag>Tag One</el-tag>
                <el-tag type="gray">Tag Two</el-tag>
                <el-tag type="primary">Tag Three</el-tag>
                <div>
              </el-col>
              <el-col :span="3">
                <div class="cx-circle">
                  <i class="fa fa-comments fa-lg cx-fa" aria-hidden="true"></i>
                </div>
                <div style="padding-left:50px; padding-top:13px">32</div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
       <!-- </el-card> -->
    <!-- </el-col>
  </el-row> -->

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
  width: 90%;
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

  .header {
    display: block;
  }

  .content {
    padding-top: 50px;
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

  .cx-header {
    background: #fff;
    display: block;
    height: 36px;
    width: 36px;
    border-radius:50%;
    position: absolute;;
  }

  .cx-circle {
    background: #fff;
    display: block;
    height: 36px;
    width: 36px;
    border-radius:50%;
    position: absolute;;
    /*padding: auto auto;*/
    /*text-align:center;*/
    /*border-bottom-right-radius:50%;*/
  }

  .cx-circle:hover {
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
  }

  .cx-fa {
    padding-top: 11px;
    padding-left: 9px;
  }

</style>
