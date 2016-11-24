// vuex/modules/user.js
import * as types from '../mutation-types'
import User from '../models/user'

// 该模块的初始状态
const state = {
  userInfo: '',
  checkoutUser: null
}

// actions
const actions = {
  login ({ commit, state }, userinfo) {
    // const savedCartItems = [...state.added]
    // commit(types.CHECKOUT_REQUEST)
    // shop.buyProducts(
    //   products,
    //   () => commit(types.CHECKOUT_SUCCESS),
    //   () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
    // )
    return Vue.http.post('/api/login', payload)
      .then(response=> {
        if (response.data.state === 1) {
          commit('SET_USER', payload)
        } else {
          return Promise.reject(response.data.msg)
        }
      })
  },
  addUser (commit, userinfo)
}

// 相关的 mutations
const mutations = {
  [types.ADD_USER] (state, userinfo) {
    // let userInfo = {
    //   username: name,
    //   password: pwd
    // }
    // User.create(userInfo, function (err, result) {
    //   if (err) {
    //     console.log(err);
    //   }
    // })
  },
  [types.SET_USER] (state, userinfo) {
    state.userinfo = userinfo
  },
}

export default {
  state,
  mutations
}
