
import authApi from '../../api/auth';
import { Direct2Doc } from '../../config/axios';

export default {
  state: {
    user: null,
    credentials: null,
  },

  actions: {
    async userLogin({ dispatch, commit }, { email, password }) {
      console.log(email, password)
      try {
        const response = await authApi.postUserLogin({
          email,
          password,
        });
  
        dispatch('userSetCredentials', response.data);
        await commit('USER_SET_DATA', response.data);
  
        return Promise.resolve(response);
      } catch (error) {
  
        commit('USER_SET_CREDENTIALS', null);
  
        return Promise.reject(error);
      }
    },

    userSetCredentials({ commit }, { token, refreshToken }) {
      // Setting the api token in axios instance
      Direct2Doc.defaults.headers.common.Authorization = `Bearer ${token}`;

      // Setting the api token in session
      window.sessionStorage.setItem('token', token);

      // Commiting the token
      commit('USER_SET_CREDENTIALS', {
        token: token,
        refreshToken: refreshToken,
      });
    },

    async userLogOut({ commit, dispatch }) {
      Promise.allSettled([
        // Reset user data
        commit('USER_RESET_ALL_DATA'),
        // Reset chat data
        dispatch('chatResetUser'),
        // Reset inpeace play data
        dispatch('inpcPlayClearData'),
      ]);

      // Remove session and local data
      window.localStorage.removeItem('refreshToken');
      window.sessionStorage.removeItem('token');

      // Removing authorization from api requests
      delete Direct2Doc.defaults.headers.common.Authorization;
    },
  },
  
  mutations: {
    USER_SET_CREDENTIALS(state, credentials) {
      state.credentials = credentials;
    },

    USER_SET_DATA(state, payload) {
      state.user = payload;
    },
  }
}
