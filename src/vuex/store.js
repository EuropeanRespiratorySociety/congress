
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

import paths from '../router/paths'

const keys = paths.reduce((a, i) => {
  a[i.path] = {}
  return a
}, {})

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  actions,
  getters,
  state: {
    drawer: false,
    pages: keys,
    presentations: {},
    pageNumber: 1,
    skip: 0,
    limit: 25,
    length: 0,
    offline: false
  },
  mutations: mutations.default,
  plugins: [vuexLocal.plugin]
})

