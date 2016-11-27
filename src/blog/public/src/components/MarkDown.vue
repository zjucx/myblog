<template>
<div id='markdown'>
  <!-- <el-input placeholder="Please input" v-model="input"> </el-input> -->
  <input id="artTitle"
         type="text"
         placeholder="Title"
         v-model.trim="artTitle"
  >
  <textarea id="editor">
  </textarea>
</div>
</template>

<script>
import SimpleMDE from 'simplemde'
import {mapState, mapActions, mapMutations} from 'vuex'
let simplemde;
export default {
  name: 'markdown',
  data () {
    return {
      artTitle: ''
    }
  },
  mounted() {
		this.$nextTick(function() {
      simplemde = new SimpleMDE({
        element: document.getElementById("editor"),
        autoDownloadFontAwesome: false,
        tabSize: 4,
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
            action: this.submit,
            className: "fa fa-paper-plane",
            title: "Submit",
          },
        ],
       });
       simplemde.codemirror.on("change", this.autoSave);
		})
	},
  methods: {
		submit(event) {
      console.log(this.artTitle)
      this.$store.dispatch('saveArticle')
		},
    autoSave() {
      this.$store.dispatch('autoSave', simplemde.value())
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/simplemde.css';

#markdown {
  margin-left: 250px;
  padding-right: 10px;
}

#artTitle {
  transition: all 0.4s;
  width: 100%;
  font-size: 16px;
  height:20px;
  padding: 8px;
  border: 0px;
  text-align: center;
  outline: none;
  border-bottom: 1px solid $green1;
  background-color: #eeeeee;
}
</style>
