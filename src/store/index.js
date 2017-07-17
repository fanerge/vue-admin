/**
 * Created by yuzhenfan on 2017/6/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { 
	login
} from '@/service/api'
Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义的全局状态
  state: {
    userInfo: {},
    token: null
  },
  // 处理同步的全局状态
  mutations: {
    login: (state, token) => {
      sessionStorage.setItem('token', token); // 本地保存token
      state.token = token;
    },
    userChange: (state, data) => {
      sessionStorage.setItem('userInfo', JSON.stringify(data)); // 本地保存用戶信息
      state.userInfo = data;
    },
    logout: (state) => {
      sessionStorage.removeItem('token'); // 本地清除token
      state.token = null
    }
  },
  // 异步处理全局状态
  actions: {
  	login ({commit}, user) {
  		return new Promise((resolve, reject) => {
	  		login (user.username, user.password)
	  		.then((res) => {
	  			commit('login', res.token)
	  			commit('userChange', res.userInfo)
	  			resolve(res)
	  		})
	  		.catch((err) => {
	  			reject(err)
	  		})
	  	})
  	}
  },
  // 对全局状态进行处理
  getters: {
  }
})

export default store
