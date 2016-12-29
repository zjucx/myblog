<template>

<!-- Page Layout here -->
  <div class="mainpage">
  <div v-bind:style="style">

  <!-- Grey navigation panel -->
  <div v-for="(o, index) in 2">
    <articles></articles>
    <articles></articles>
  </div>
  </div>

  <!-- Teal page content -->
  <img src="../assets/logo.png">
  <h1>{{ paddingLeft }}</h1>
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
  <!-- </div> -->
</div>
</template>

<script>
import Articles from './Articles.vue'
export default {
  name: 'mainPage',
  data () {
    return {
      paddingLeft: 0,
    }
  },
  components: {
    articles: Articles
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
		}
	},
  computed: {
		style() {
      console.log(this.paddingLeft)
      this.paddingLeft = this.paddingLeft - 345
      console.log(this.paddingLeft)
			return {
        'width': this.paddingLeft + 'px',
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
.mainpage{
  position: fixed;
  width: auto;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 345px;
  top: 0;
  height: 100%;
  overflow-y: auto;
}
.mainpage.row {
    padding-top: 20px;
    margin-left: 250px;
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
