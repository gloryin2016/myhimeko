import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import daka from '@/components/daka.vue'
import baoming from '@/components/baoming.vue'
import share from '@/components/share.vue'
import ox from '@/components/ox.vue'
import pay from '@/components/pay.vue'
import popup from '@/components/popup.vue'
import list from '@/components/list.vue'
import bh3rd from '@/components/bh3rd.vue'
import bh from '@/components/bh.vue'
import test from '@/components/test.vue'
import animite from '@/components/animite.vue'
import videotest from '@/components/videotest.vue'
import login from '@/components/login.vue'
import teaching from '@/components/teaching.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/daka',
      name: 'daka',
      component: daka
    },
    {
      path: '/baoming',
      name: 'baoming',
      component: baoming
    },
    {
      path: '/share',
      name: 'share',
      component: share
    },
    {
      path: '/ox',
      name: 'ox',
      component: ox
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/popup',
      name: 'popup',
      component: popup
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/bh3rd',
      name: 'bh3rd',
      component: bh3rd
    },
    {
      path: '/bh',
      name: 'bh',
      component: bh,
      meta: {
        title: '崩坏3rd界面'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: '湖南信息学院评教网'
      }
    },
    {
      path: '/teaching',
      name: 'teaching',
      component: teaching,
      meta: {
        title: '评教主页'
      }
    },
    {
      path: '/animite',
      name: 'animite',
      component: animite
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '用户登录'
      }
    },
    {
      path: '/videotest',
      name: 'videotest',
      component: videotest
    }
  ]
})
