import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'  // 로그인 컴포넌트를 import 한다
import MainTask from '@/MainTask'       // MainTask 컴포넌트를 import 한다

Vue.use(Router)

export default new Router({
  mode: 'history'
  , base: process.env.BASE_URL
  , routes: [
    {
      path: '/', // 첫 화면을 로그인 화면으로 설정한다
      name: 'Login',
      component: Login
    }
    , {
      path: '/mainTask', // 첫 화면을 로그인 화면으로 설정한다
      name: 'MainTask',
      component: MainTask
    }
  ]
})