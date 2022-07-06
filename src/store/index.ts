import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

// Modules
import app from './modules/appModule';
import user from './modules/user';
import shifts from './modules/shifts';
import customer from './modules/customer';
import patients from './modules/patients';

export const store = createStore({
  modules: {
    app,
    user,
    shifts,
    customer,
    patients,

  },
  plugins: [createPersistedState({
    key: 'Direct2Doc',
    storage: window.sessionStorage,
  })],
});
