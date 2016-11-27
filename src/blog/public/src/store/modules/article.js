import * as type from '../mutation-types'

const state {
  articles: [],
  article: '',
  time: '',
  writer: ''
}

// getters
const getters = {
  checkoutLogin: state => state.isLogin
}

export default {
  getArticles: (commit) => {
    return Vue.http.get('/api/getArticles')
      .then(response=> response.json())
      .then(articles=> {
        // stopLoading(commit, start)
        commit('SET_ARTICLES', articles)
      })
  },
  getArticle: (commit, id) => {
    return Vue.http.get('/api/getArticles', {param: {id}})
      .then(response=> {
        // stopLoading(commit, start)
        commit('SET_ARTICLE', response.data
      })
  },
  saveArticle: ({state, commit}) => {
    return Vue.http.post('/api/saveArticle', state.article)
      .then(
        ()=>doToast(state, commit, {info: '保存成功,是否返回?', btnNum: 2}),
        ()=>doToast(state, commit, {info: '保存失败', btnNum: 1})
      )
      .finally(()=>commit('TOASTING_TOGGLE', false))
  }
}
