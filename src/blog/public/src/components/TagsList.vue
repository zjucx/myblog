<template>
<div class="tagslist row grey lighten-3 z-depth-5">
  <div class="powerby" >Tags Cloud :</div>
  <div id="tagsclound">
    <a v-for="item of items" :href="item.href" target="_blank">{{ item.tag }}</a>
    <!-- <a href="http://www.lanrentuku.com" target="_blank">golang</a>
    <a href="http://www.lanrentuku.com" target="_blank">c++</a>
    <a href="http://www.lanrentuku.com" target="_blank">python</a>
    <a href="http://www.lanrentuku.com" target="_blank">github</a>
    <a href="http://www.lanrentuku.com" target="_blank">docker</a>
    <a href="http://www.lanrentuku.com" target="_blank">java</a>
    <a href="http://www.lanrentuku.com" target="_blank">php</a>
    <a href="http://www.lanrentuku.com" target="_blank">althorigm</a>
    <a href="http://www.lanrentuku.com" target="_blank">cloudfoundry</a>
    <a href="http://www.lanrentuku.com" target="_blank">android</a>
    <a href="http://www.lanrentuku.com" target="_blank">ios</a>
    <a href="http://www.lanrentuku.com" target="_blank">memory</a>
    <a href="http://www.lanrentuku.com" target="_blank">mongodb</a>
    <a href="http://www.lanrentuku.com" target="_blank">vuejs</a>
    <a href="http://www.lanrentuku.com" target="_blank">webpack</a>
    <a href="http://www.lanrentuku.com" target="_blank">sass</a>
    <a href="http://www.lanrentuku.com" target="_blank">react</a>
    <a href="http://www.lanrentuku.com" target="_blank">jquery</a>
    <a href="http://www.lanrentuku.com" target="_blank">javascript</a>
    <a href="http://www.lanrentuku.com" target="_blank">dota</a>
    <a href="http://www.lanrentuku.com" target="_blank">dockerfile</a>
    <a href="http://www.lanrentuku.com" target="_blank">design</a> -->
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
		// this.$nextTick(function() {
    this.tagscloud()
		// })
	},
  methods: {
		tagscloud(event) {
				tagscloud()
		}
	},
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
