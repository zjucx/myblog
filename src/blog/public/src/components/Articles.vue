<template>
<div>
  <div class='article' v-for="item in articles">
  <!-- Page Layout here -->
  <div class="powerby" >Trending on ZjuCx</div>
  <!-- <el-row>
    <el-col> -->
      <!-- <el-card :body-style="{ padding: '14px' }"> -->
      <div style="padding:14px;">
        <div class="header">
          <el-row :gutter="20">
            <el-col :span="3">
              <!-- <div class="cx-header"> -->
                <img class="cx-header" src="../assets/logo.png">
              <!-- </div> -->
              <div style="padding-left:50px; padding-top:8px;font-size:16px;">zjucx</div>
            </el-col>
          </el-row>
        </div>
        <!-- <center> -->
        <div class="content">
          <h2 style="cursor:pointer;" v-on:click="loadArticle(item.Id)"><a href="/#/article">{{item.title}}</a></h2>
          <!-- <img src="../assets/logo.png" class="image"> -->
          <div v-html="content(item.summary)"></div>
            <!-- {{ content(item.summary) }} -->
        </div>
        <!-- </center> -->
        <div>
          <div class="bottom clearfix">
            <el-row :gutter="20">
              <el-col :span="2">
                <div class="cx-circle">
                  <i class="fa fa-share-alt cx-fa" aria-hidden="true"></i>
                </div>
              </el-col>

              <el-col :span="2" :offset="2">
                <div class="cx-circle">
                  <i class="fa fa-comments cx-fa" aria-hidden="true"></i>
                </div>
                <div style="padding-left:40px; padding-top:8px;font-size: 12px;">32</div>
              </el-col>
              <el-col :span="2" :offset="1">
                <div class="cx-circle">
                  <i class="fa fa-thumbs-up cx-fa" aria-hidden="true"></i>
                </div>
                <div style="padding-left:40px; padding-top:8px;font-size: 12px;">32</div>
              </el-col>
              <el-col :span="14" :offset="1">
                <!-- <time class="time">{{ currentDate }}</time> -->
                <!-- <div> -->
                <i class="fa fa-tags cx-fa" aria-hidden="true">:</i>
                <el-tag v-for="tag in item.tags">{{tag.name}}</el-tag>
                <!-- <el-tag type="gray">Tag Two</el-tag>
                <el-tag type="primary">Tag Three</el-tag> -->
                <!-- <div> -->
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
       <!-- </el-card> -->
    <!-- </el-col>
  </el-row> -->
</div>
</div>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import marked from 'marked'

export default {
  name: 'Articles',
  data () {
    return {
      isArticle: false
  //     currentDate: new Date(),
  //     msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState({
      articles: state => state.article.articles,
    }),
  },
  methods: {
    content: function (mdstr) {
      return marked(mdstr)
    },
    loadArticle: function (id) {
      console.log("loadArticle" + id)
      this.$store.dispatch('getArticle', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.article{
  /*margin: 0 auto;*/
  /*text-align: left;*/
  width: 90%;
  /*text-align: center;*/
  border-bottom: 2px solid #fff;
}

.powerby {
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
  padding: 20px 0 10px 30px;
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
  height: 24px;
  width: 24px;
  border-radius:50%;
  position: absolute;;
}

.cx-circle:hover {
  box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
}

.cx-fa {
  padding-top: 4px;
  padding-left: 4px;
}

</style>
