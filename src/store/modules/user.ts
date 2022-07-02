
import authApi from '../../api/auth';
import { Direct2Doc } from '../../config/axios';

export default {
  state: {
    user: null,
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
  
        return Promise.resolve(response);
      } catch (error) {
  
        commit('USER_SET_CREDENTIALS', null);
  
        return Promise.reject(error);
      }
    },
  },
  
  mutations: {
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
  }
}
