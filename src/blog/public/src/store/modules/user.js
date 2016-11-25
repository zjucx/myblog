// vuex/modules/user.js
import * as types from '../mutation-types'
// import User from '../models/user'

// 该模块的初始状态
const state = {
  userInfo: '',
  isLogin: false
}

// getters
const getters = {
  checkoutLogin: state => state.isLogin
}

// actions
const actions = {
  login ({ commit, state }, userinfo) {
    return Vue.http.post('/user/login', payload)
      .then(response=> {
        if (response.data.state === 1) {
          commit('SET_USER', userinfo)
        } else {
          return Promise.reject(response.data.msg)
        }
      })
  },
  addUser (commit, userinfo) {
    return Vue.http.post('/user/adduser', userinfo)
      .then(response=> {
        if (response.data.state === 1) {
          commit('ADD_USER', userinfo)
        } else {
          return Promise.reject(response.data.msg)
        }
      })
  }
}

// 相关的 mutations
const mutations = {
  [types.ADD_USER] (state, userinfo) {
    state.userinfo = userinfo
    state.isLogin = true
  },
  [types.SET_USER] (state, userinfo) {
    state.userinfo = userinfo
    state.isLogin = true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
