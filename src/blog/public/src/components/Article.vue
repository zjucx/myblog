<template>
<div class='article'>
  <!-- Page Layout here -->
  <div class="powerby" >Trending on Google+</div>
      <div style="padding:14px;">
        <article>
          <h2>{{article.title}}</h2>
          <div v-html="content(article.article)"></div>
        </article>
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
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
}
.powerby {
    color: #616161;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    padding: 14px 16px 6px;
    text-align: left;
}
</style>
