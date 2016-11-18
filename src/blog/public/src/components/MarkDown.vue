<template>
<div id='content-zjucx'>
  <textarea id="editor">
  </textarea>
</div>
</template>

<script>
import ContentItem from './ContentItem.vue'
import SimpleMDE from 'simplemde'
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
      /*var editor = document.getElementById('editor');
      MarkdownIME.Enhance(editor);
      console.log("markdown")
      //optional: enable Tex Formula support
      var math = new MarkdownIME.Addon.MathAddon();
      MarkdownIME.Renderer.inlineRenderer.addRule(math);*/
      var simplemde = new SimpleMDE({ element: document.getElementById("editor") });
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/simplemde.css';

#content-zjucx {
  margin-left: 250px;
}
</style>
