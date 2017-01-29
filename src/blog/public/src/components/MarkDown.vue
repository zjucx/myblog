<template>
<div id='markdown'>
  <el-row :gutter="10">
    <el-col :span="14" :offset="4">
      <el-input v-model.trim="title">
        <template slot="prepend">Title:</template>
      </el-input>
    </el-col>
    <!-- <el-col :span="4">
      <el-input placeholder="Add A Tag" icon="plus" v-model="addtag" @click="addTag" v-on:keyup.enter="addTag">
      </el-input>
    </el-col>
    <el-col :span="6" style="padding-top:5px">
      <el-tag
        v-for="tag in tags"
        :closable="true"
        :type="tag.type"
        :key="tag"
        :close-transition="false"
        @close="removeTag(tag)"
      >
      {{tag.name}}
      </el-tag>
    </el-col> -->
  </el-row>
  <textarea id="editor">
  </textarea>
</div>
</template>

<script>
import SimpleMDE from 'simplemde'
import marked from 'marked'
import highlight from 'highlight.js/lib/highlight'
import {mapState, mapActions, mapMutations} from 'vuex'
let simplemde;
export default {
  name: 'markdown',
  data () {
    return {
      title: '',
      addtag: '',
      tags: [
        { key: 1, name: 'node', type: '' },
        { key: 2, name: 'vuex', type: 'warning' },
        { key: 3, name: 'blog', type: 'danger' }
      ]
    };
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
            // action: this.toggleFullScreen,
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
      //  simplemde.codemirror.on("change", this.autoSave);
       marked.setOptions({
         highlight: function (code) {
           return highlight.highlightAuto(code).value;
         }
       });
		})
	},
  methods: {
		submit(event) {
      this.$store.dispatch('saveArticle', {
        "title": this.title,
        "article": simplemde.value(),
        "tags": this.tags
      })
		},
    // autoSave() {
    //   this.$store.dispatch('autoSave', simplemde.value())
    //   // this.title = marked(simplemde.value())
    // },
    addTag(ev) {
      this.tags.push({key: (this.tags.length+1), name: this.addtag, type: 'danger'})
      this.addtag = ''
    },
    removeTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '../assets/css/simplemde.css';

#markdown {
  /*margin-left: 45px;*/
  padding: 5px 10px 0px 10px;
  /*padding-left: 10px;*/
}
</style>
