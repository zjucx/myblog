<template>
<div id='picbar-zjucx' class="row grey lighten-3 z-depth-5">
  <div class="col s12">
  <img src="../assets/logo.png">
  <P>Essential Links</P>
  <ul>
    <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
    <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
    <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
  </ul>
  <p>Ecosystem</p>
  <ul>
    <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
    <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
    <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
  </ul>
  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="fa fa-paper-plane" aria-hidden="true"></i>
  </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'picBar',
  data () {
    return {
      paddingLeft: 0,
    }
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
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#picbar-zjucx {
  position: fixed;
  width: 300px;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 45px;
  top: 0;
  height: 100%;
  text-align: center;
}

.col.s12 {
  height: auto;
  min-height: 1024px;
  /*background-image: url('../assets/bg.jpg');*/
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
