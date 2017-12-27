import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLoading: false,
  direction: 'forward',
  noSlide: true,
  routerName: 'recommend',
  nightMode: false,
  pageDetail: false
}

export default new Vuex.Store({
  state,
  mutations: {
    UPDATE_LOADING (state, payload) {
      state.isLoading = payload.status
    },
    UPDATE_DIRECTION (state, payload) {
      state.direction = payload.direction
    },
    UPDATE_SLIDE (state, payload) {
      state.noSlide = payload.noslide
    },
    UPDATE_ROUTER (state, payload) {
      state.routerName = payload.routerName
    },
    TOGGLE_NIGHT (state, payload) {
      state.nightMode = payload.nightMode
    },
    TOGGLE_PAGE_DETAIL (state, payload) {
      state.pageDetail = payload.pageDetail
    }
  }
})
