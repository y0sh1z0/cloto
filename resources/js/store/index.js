import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import alert from './alert';
import auth from './auth';
import error from './error';

const store = new Vuex.Store({
  modules: {
    alert,
    auth,
    error,
  },
});

export default store;
