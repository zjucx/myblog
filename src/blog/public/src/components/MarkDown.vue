<template>
<div id='markdown-zjucx'>
  <el-input placeholder="Please input" v-model="input" style="text-align:center"> </el-input>
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
      lastpaddingLeft: 0,
      input: ''
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
      var simplemde = new SimpleMDE({
        element: document.getElementById("editor"),
        toolbar: [
          {
            name: "bold",
            action: SimpleMDE.toggleBold,
            className: "fa fa-bold",
            title: "Bold",
          },
          {
            name: "italic",
            action: SimpleMDE.toggleItalic,
            className: "fa fa-italic",
            title: "Italic",
          },
          {
            name: "strikethrough",
            action: SimpleMDE.toggleStrikethrough,
            className: "fa fa-strikethrough",
            title: "Strikethrough",
          },
            "|", // Separator
          {
            name: "link",
            action: SimpleMDE.drawLink,
            className: "fa fa-link",
            title: "Link",
          },{
            name: "image",
            action: SimpleMDE.drawLink,
            className: "fa fa-picture-o",
            title: "Image",
          },
            "|", // Separator
          {
            name: "code",
            action: SimpleMDE.toggleCodeBlock,
            className: "fa fa-code",
            title: "Code",
          },{
            name: "quote",
            action: SimpleMDE.toggleBlockquote,
            className: "fa fa-quote-left",
            title: "Quote",
          },
            "|", // Separator
          {
            name: "preview",
            action: SimpleMDE.togglePreview,
            className: "fa fa-eye no-disable",
            title: "Preview",
          },{
            name: "side-by-side",
            action: SimpleMDE.toggleSideBySide,
            className: "fa fa-columns no-disable no-mobile",
            title: "Side-by-side",
          },{
            name: "fullscreen",
            action: SimpleMDE.toggleFullScreen,
            className: "fa fa-arrows-alt no-disable no-mobile",
            title: "Fullscreen",
          },
            "|", // Separator
          {
            name: "submit",
            action: function customFunction(editor){
                // Add your own code
            },
            className: "fa fa-paper-plane",
            title: "Submit",
          },
        ],
       });
		})
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/simplemde.css';

#markdown-zjucx {
  margin-left: 250px;
  /*height: 100%;*/
  /*min-height: 630px;*/
  overflow-y: inherit;
  border: 1px solid #C0CCDA;
  border-radius: 4px;
}
</style>
