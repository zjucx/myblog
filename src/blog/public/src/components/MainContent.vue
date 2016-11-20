<template>
<div id='content-zjucx'>
  <!-- Page Layout here -->
  <div class="content-zjucx row grey lighten-3">
  <div class="col s12" v-bind:style="style">

  <!-- Grey navigation panel -->
  <contentItem></contentItem>
  <contentItem></contentItem>

  <!-- Teal page content -->
  <img src="../assets/logo.png">
  <h1>{{ paddingLeft }}</h1>
  <h1>{{ lastpaddingLeft }}</h1>
  <h2>Essential Links</h2>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  </ul>
  <h2>Ecosystem</h2>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
  </div>
  <div class="clear"></div>
</div>
</template>

<script>
import ContentItem from './ContentItem.vue'
export default {
  name: 'mainContent',
  data () {
    return {
      paddingLeft: 0,
      lastpaddingLeft: 0
    }
  },
  components: {
    contentItem: ContentItem
  },
  mounted() {
		this.$nextTick(function() {
				window.addEventListener('resize', this.getWindowWidth);
        this.getWindowWidth()

		})
	},
  methods: {
		getWindowWidth(event) {
				console.log(document.documentElement.clientWidth)

        //this.paddingLeft = this.$el.querySelector('.row').style.width;
				this.paddingLeft = document.documentElement.clientWidth;
        this.lastpaddingLeft = this.paddingLeft
		}
	},
  computed: {
		style() {
      console.log(this.paddingLeft)
      this.paddingLeft = (this.paddingLeft - 65 - 900)/2
      this.paddingLeft = this.paddingLeft > 40 ? this.paddingLeft : 40
			return {
        'padding-left': this.paddingLeft + 'px',
        'padding-right': this.paddingLeft + 'px',
      }
    }
	},
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content-zjucx{
  position: fixed;
  width: 100%;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 295;
  top: 0;
  height: 100%;
}
.content-zjucx.row {
    padding-top: 20px;
    margin-left: 250px;
}

.col.s3 {
  height: auto;
  min-height: 1024px;
  background-image: url('../assets/bg.jpg');
}
.clear{
  clear: both;
  height: 0px;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
