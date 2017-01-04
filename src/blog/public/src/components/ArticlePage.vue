<template>
<div id="app" class="grey lighten-3">
  <tagsList></tagsList>
  <!-- Page Layout here -->
  <div class="content" v-bind:style="style">
    <!-- Grey navigation panel -->
    <cxarticle></cxarticle>
  </div>
</div>
</template>

<script>
import Article from './Article.vue'
import TagsList from './TagsList.vue'
export default {
  name: 'articlePage',
  data () {
    return {
      width: 0
    }
  },
  components: {
    cxarticle: Article,
    tagsList: TagsList
  },
  mounted() {
		// this.$nextTick(function() {
				window.addEventListener('resize', this.getWindowWidth);
        this.getWindowWidth()
		// })
    // this.$store.dispatch('getArticle')
	},
  methods: {
		getWindowWidth(event) {
				this.width = document.documentElement.clientWidth;
		}
	},
  computed: {
		style() {
      this.width = this.width - 345
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
.content{
  position: fixed;
  width: auto;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  left: 345px;
  top: 0;
  height: 100%;
  overflow-y: auto;
}
.content.row {
    padding-top: 20px;
    margin-left: 250px;
}
</style>
