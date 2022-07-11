
import authApi from '../../api/auth';
import  Direct2Doc  from '../../config/axios';

export default {
  state: {
    user: null,
    credentials: null,
    autoLoginData: null,
  },

  getters: {
    /**
     * User data
     */
    userData: (state) => state.user,
    userAutoLoginData: (state) => state.autoLoginData,
    userToken: (state) => state.credentials?.token, // TODO: Configurar para usar token salvo na session
    userLoggedId: (getters) => getters.user?.id,
    userLoggedIn: (getters) => !!getters.userToken,
  },

  actions: {
    async userLogin({ dispatch, commit }, { username, password }) {
      try {
        const response = await authApi.postUserLogin({
          username,
          password,
        });
  
        dispatch('userSetCredentials', response.data.accessToken);
  
        return Promise.resolve(response);
      } catch (error) {
  
        commit('USER_SET_CREDENTIALS', null);
  
        return Promise.reject(error);
      }
    },

    userSetCredentials({ commit }, accessToken : string ) {
      // Setting the api token in axios instance
      Direct2Doc.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      console.log(Direct2Doc.defaults.headers.common.Authorization);

      // Setting the api token in session
      window.sessionStorage.setItem('token', accessToken);

      // Commiting the token
      commit('USER_SET_CREDENTIALS', {
        token: accessToken,
      });
    },

    userSetAutoLoginData({ commit, dispatch }, { token, origin }) {
      commit('USER_SET_AUTO_LOGIN', {
        origin,
        token,
      });

      if (origin === 'SESSION' || origin === 'URL') {
        dispatch('userSetCredentials', token);
      }
    },

    async userLogOut({ commit }) {
      Promise.allSettled([
        // Reset user data
        commit('USER_RESET_ALL_DATA'),
        // Reset inpeace play data
        //dispatch('inpcPlayClearData'),
      ]);

      window.sessionStorage.removeItem('token');

      // Removing authorization from api requests
      delete Direct2Doc.defaults.headers.common.Authorization;
    },
  },
  
  mutations: {
    USER_SET_CREDENTIALS(state, payload : Object) {
      console.log(payload);
      state.credentials = payload;
    },

    USER_SET_DATA(state, payload : Object) {
      state.user = payload;
    },

    USER_RESET_ALL_DATA(state) {
      console.log('deslogou');
      state.user = null;
      state.credentials = null;
    },

    USER_SET_AUTO_LOGIN(state, payload : Object) {
      state.autoLoginData = payload;
    },
  }
}
