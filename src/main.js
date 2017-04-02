import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

// import css
import './assets/css/reset.css'
import './assets/css/style.css'
import 'icono'

// 安装插件
Vue.use(Vuex)
Vue.use(VueRouter)

// 根组件
import App from './App.vue'

// 引入子组件
import index from './components/index.vue'
import flower from './components/details/flower.vue'
import articles from './components/details/articles.vue'



// 定义路由
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/flower',
      component: flower
    },
    {
      path: '/myArticles',
      component: articles
    }
  ]
})

// 路由跳转时关闭sidebar
router.afterEach((to, from) => {
  store.commit('closeSideBar')
})


// vuex 构建store
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

// vue实例
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

// mask显示时禁止滚动
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
