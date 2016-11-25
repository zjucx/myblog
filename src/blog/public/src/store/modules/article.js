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
  getArticle: (commit) => {
    return Vue.http.get('/api/getArticles')
      .then(response=> response.json())
      .then(articles=> {
        // stopLoading(commit, start)
        commit('SET_ARTICLE', article)
      })
  }
}
