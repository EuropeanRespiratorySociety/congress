import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/programme',
      name: 'Programme',
      component: Home
    },
    {
      path: '/programme/test',
      name: 'Test',
      component: Home
    },
    {
      path: '/programme/test2',
      name: 'Test 2',
      component: Home
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   next(vm => {
//     const slug = store.getters.slug
//     vm.store.dispatch('setCategoryKey', slug)
//     vm.store.dispatch('setArticlesKey', slug)
//   })
// })

export default router
