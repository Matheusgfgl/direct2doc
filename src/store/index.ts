import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

import appModule from './modules/appModule'


export const store = createStore({
  modules: {
    appModule
  },
  plugins: [createPersistedState({
    key: 'INspira',
    storage: window.sessionStorage,
  })],
});
