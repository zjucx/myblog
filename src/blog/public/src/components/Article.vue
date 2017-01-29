<template>
<div class='article'>
  <!-- Page Layout here -->
  <div class="powerby" >Trending on ZjuCx</div>
  <div style="padding:0 14px 14px 14px;border-bottom: 2px solid #fff;">
    <article style="padding: 0 0 10px 30px;">
      <h2>{{article.title}}</h2>
      <div v-html="content(article.article)"></div>
    </article>
  </div>
  <div class="powerby" >Comments</div>
  <div style="padding:0 14px 14px 14px;border-bottom: 2px solid #fff;">
    <div style="padding: 0 0 10px 30px;">
      <div style="float: left; width:50px;">
        <img src="../assets/logo.png">
      </div>
      <div style="margin-left;margin-left:60px;">
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import marked from 'marked'

export default {
  name: 'Article',
  computed: {
    ...mapState({
      article: state => state.article.article,
    }),
  },
  methods: {
    content: function (mdstr) {
      return marked(mdstr)
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
}
.powerby {
    color: #616161;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 14px 16px 6px;
    text-align: left;
}
img {
  height: 50px;
  width: 50px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  margin-right: 8px;
}
</style>
