import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//
import './assets/css/reset.css'
import './assets/css/style.css'
import 'icono'

// 加载
Vue.use(Vuex)
Vue.use(VueRouter)

// 根组件
import App from './App.vue'

// 引入子组件
import index from './components/index.vue'
import html from './components/details/html.vue'
import css from './components/details/css.vue'
import js from './components/details/js.vue'
import articles from './components/details/articles.vue'



// 定义路由
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/html',
      component: html
    },
    {
      path: '/css',
      component: css
    },
    {
      path: '/js',
      component: js
    },
    {
      path: '/myArticles',
      component: articles
    }
  ]
})

// 路由跳转关闭sidebar
router.afterEach((to, from) => {
  store.commit('closeSideBar')
})


// 构建store
const store = new Vuex.Store({
  state: {
    sideBarHasOpen: false,
  },
  mutations: {
    setSideBar (state) {
      state.sideBarHasOpen = !state.sideBarHasOpen
    },
    closeSideBar (state) {
      if ( state.sideBarHasOpen ) {
        state.sideBarHasOpen = false
      }
    }
  }
})

// 实例
new Vue({
  el: '#app',
  router: router,
  store: store,
  computed: {
    keke () {
      return this.$store.state.sideBarHasOpen
    }
  },
  watch: {
    keke: function (val, oldVal) {
      if ( this.keke ) {
        controlScroll.disableScroll()
      } else {
        controlScroll.enableScroll()
      }
    }
  },
  render: c => c(App) // c: createElemet
})

let controlScroll = {
  event (ev) {
    ev.preventDefault()
    ev.returnValue = false
  },

  disableScroll () {
    window.addEventListener('wheel', this.event)
    window.addEventListener('touchmove', this.event)
  },

  enableScroll () {
    window.removeEventListener('wheel', this.event)
    window.removeEventListener('touchmove', this.event)
  }
}
