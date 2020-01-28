import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeMenu: '',
    openMenu: []
  },
  mutations: {
    menu(state, {activeMenu, openMenu}) {
      state.activeMenu = activeMenu;
      state.openMenu = openMenu;
    }
  }
})
