import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条 样式
import store from '@/store'
import login from '@/pages/login'
import main from '@/pages/main'
/** 集团页面**/
import groupIndex from '@/pages/group/index'
/** 分部页面**/
import departmentIndex from '@/pages/department/index'
/** 幼儿管理页面**/
import classManage from '@/pages/childManage/classManage'
import dateShow from '@/pages/childManage/dataShow'
import online from '@/pages/childManage/online'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/group'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/group',
      component: main,
      meta: { requireAuth: true }, // 添加该字段，表示进入这个路由是需要登录的
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          component: groupIndex
        }
      ]
    },
    {
      path: '/department',
      component: main,
      meta: { requireAuth: true }, // 添加该字段，表示进入这个路由是需要登录的
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          component: departmentIndex
        }
      ]
    },
    {
    	path: '/childmanage',
    	component: main,
    	meta: { requireAuth: true },
    	children: [
    		{
    			path: '',
    			redirect: 'online'
    		},
    		{
          path: 'online',
          component: online
        },
        {
          path: 'classmanage',
          component: classManage
        },
        {
          path: 'dataShow',
          component: dateShow
        }
    	]
    }
  ]
})

// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
  store.commit('login', sessionStorage.getItem('token'))
}
// 页面刷新时，重新复制userInfo
if (sessionStorage.getItem('userInfo')) {
  store.commit('userChange', JSON.parse(sessionStorage.getItem('userInfo')))
}

let whiteList = ['/login'] // 设置白名单
router.beforeEach((to, from, next) => {
  NProgress.start() // 开启进度条
  if (store.state.token) { // 判断用户是否登陆
  	if (to.path === '/login') { // 登录的用户将不被允许进入login页面
  		next('/')
  		NProgress.done()
  	} else {
  		next()
  	}
  } else {
  	if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(route => {
  NProgress.done() // 结束进度条
})

export default router
