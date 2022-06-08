import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

export const store = createStore({
  modules: {
    //
  },
  plugins: [createPersistedState({
    key: 'INspira',
    storage: window.sessionStorage,
  })],
});
