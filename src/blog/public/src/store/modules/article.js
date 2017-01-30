import * as type from '../mutation-types'
import Vue from 'vue'

const state = {
  articles: [{"title":"aa","tags":[
        {
            "name" : "vuejs"
        },
        {
            "name" : "beego"
        },
        {
            "name" : "blog"
        }
    ],"summary":""}],
  title: '',
  article: {"title":"aaa","tags":[],"article":"aaa"},
  tags: [],
  // time: '',
  comments: [],
  author: ''
}

// getters
const getters = {
  article: state => state.article,
  articles: state => state.articles
}

const actions =  {
  getArticles: ({commit}) => {
    return Vue.http.get('article/getArticles')
      .then(response=> {
        // stopLoading(commit, start)
        commit('SET_ARTICLES', response.data)
      })
  },
  getArticle: ({commit}, id) => {
    return Vue.http.get('/article/getArticle/'+id)
      .then(response=> {
        // stopLoading(commit, start)
        commit('SET_ARTICLE', response.data)
      })
  },
  saveArticle: ({state, commit}, article) => {
    commit('SET_ARTICLE', article.article)
    commit('SET_TITLE', article.title)
    commit('SET_TAGS', article.tags)
    return Vue.http.post('/article/saveArticle', state)
      .then(
        ()=>doToast(state, commit, {info: '保存成功,是否返回?', btnNum: 2}),
        ()=>doToast(state, commit, {info: '保存失败', btnNum: 1})
      )
      // .finally(()=>commit('TOASTING_TOGGLE', false))
  },
  // autoSave: ({commit}, article) => {
  //   console.log(article)
  //   commit('SET_ARTICLE', article)
  // }
}

// 相关的 mutations
const mutations = {
  [type.SET_ARTICLE] (state, article) {
    state.article = article
  },
  [type.SET_TITLE] (state, title) {
    state.title = title
  },
  [type.SET_TAGS] (state, tags) {
    state.tags = tags
  },
  [type.SET_ARTICLES] (state, articles) {
    state.articles = articles
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
