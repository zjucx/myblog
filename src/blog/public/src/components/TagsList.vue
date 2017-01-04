<template>
<div class="tagslist row grey lighten-3 z-depth-5">
  <div class="powerby" >Tags Cloud :</div>
  <div id="tagsclound">
    <a v-for="item of items" :href="item.href" target="_blank">{{ item.tag }}</a>
  </div>
</div>
</template>

<script>
import {tagscloud} from '../assets/js/tagscloud'

export default {
  name: 'tagsList',
  data () {
    return {
      items: [
        {"href": "http://www.lanrentuku.com", "tag": "node"},
        {"href": "http://www.lanrentuku.com", "tag": "golang"},
        {"href": "http://www.lanrentuku.com", "tag": "c"},
        {"href": "http://www.lanrentuku.com", "tag": "c++"},
        {"href": "http://www.lanrentuku.com", "tag": "python"},
        {"href": "http://www.lanrentuku.com", "tag": "github"},
        {"href": "http://www.lanrentuku.com", "tag": "docker"},
        {"href": "http://www.lanrentuku.com", "tag": "cf"},
        {"href": "http://www.lanrentuku.com", "tag": "dota"},
        {"href": "http://www.lanrentuku.com", "tag": "php"},
        {"href": "http://www.lanrentuku.com", "tag": "althorigm"},
        {"href": "http://www.lanrentuku.com", "tag": "js"},
        {"href": "http://www.lanrentuku.com", "tag": "vuejs"},
        {"href": "http://www.lanrentuku.com", "tag": "memory"},
        {"href": "http://www.lanrentuku.com", "tag": "dockerfile"},
        {"href": "http://www.lanrentuku.com", "tag": "design"},
        {"href": "http://www.lanrentuku.com", "tag": "android"},
        {"href": "http://www.lanrentuku.com", "tag": "ios"},
        {"href": "http://www.lanrentuku.com", "tag": "sass"},
        {"href": "http://www.lanrentuku.com", "tag": "jquery"},
        {"href": "http://www.lanrentuku.com", "tag": "react"},
        {"href": "http://www.lanrentuku.com", "tag": "bootstamp"},
        {"href": "http://www.lanrentuku.com", "tag": "vuejs"},
        {"href": "http://www.lanrentuku.com", "tag": "java"},
        {"href": "http://www.lanrentuku.com", "tag": "btree"},
        {"href": "http://www.lanrentuku.com", "tag": "mysql"},
        {"href": "http://www.lanrentuku.com", "tag": "mongodb"},
      ],
    }
  },
  mounted() {
		tagscloud()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" rel="stylesheet/scss">
.tagslist {
  position: fixed;
  width: 300px;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 45px;
  top: 0;
  height: 100%;
  border-right: 2px solid #fff;
  // text-align: center;
  #tagsclound {
    height:300px;
    width:300px;
    position:relative;
    // margin:10px auto;
    a {
      position:absolute;
      top:0px;
      left:0px;
      // color:#fff;
      background:#eee;
      border-radius:5px;
      font-size: 12px;
      // font-weight:bold;
      padding:2px 4px;
      color: #42b983;
      &:hover {
        border:1px solid #fff;
        background:#fff;
        border-radius:5px;
      }
    }
  }
  .powerby {
      color: #616161;
      font-size: 12px;
      font-weight: 400;
      line-height: 18px;
      padding: 14px 16px 6px;
      text-align: left;
  }
}
</style>
