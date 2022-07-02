import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

// Modules
import app from './modules/appModule';
import user from './modules/user';

export const store = createStore({
  modules: {
    app,
    user,
  },
  plugins: [createPersistedState({
    key: 'Direct2Doc',
    storage: window.sessionStorage,
  })],
});
