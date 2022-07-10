import { createStore } from 'vuex'
// Persist state
import createPersistedState from 'vuex-persistedstate';

// Modules
import app from './modules/appModule';
import user from './modules/user';
import appointments from './modules/appointments';
import customer from './modules/customer';
import patients from './modules/patients';

export const store = createStore({
  modules: {
    app,
    user,
    appointments,
    customer,
    patients,

  },
  plugins: [createPersistedState({
    key: 'Direct2Doc',
    storage: window.sessionStorage,
  })],
});
