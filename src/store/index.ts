import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

// Modules
import app from './modules/appModule';

export const store = createStore({
  modules: {
    app,
  },
  plugins: [createPersistedState({
    key: 'Direct2Doc',
    storage: window.sessionStorage,
  })],
});
