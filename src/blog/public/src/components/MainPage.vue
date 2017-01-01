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
</div>
</template>

<script>
import Articles from './Articles.vue'
export default {
  name: 'mainPage',
  data () {
    return {
      width: 0
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
				this.width = document.documentElement.clientWidth;
		}
	},
  computed: {
		style() {
      console.log(this.width)
      this.width = this.width - 345
      console.log(this.width)
			return {
        'width': this.width + 'px',
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
</style>
