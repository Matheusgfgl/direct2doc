import api from '../../api/customer';
export default {
  state: {
    customers: [],
    agreements: [],
  },

  getters: {
    getCustomers: (state: Object) => state.customers,
    getAgreements: (state: Object) => state.agreements,
  },

  actions: {
    async getCustomersAll({ commit }) {
      try {
        const response = await api.getCustomersList();

        commit('SET_CUSTOMERS', response.data);

        return Promise.resolve(response);
      } catch (e) {
        commit('SET_CUSTOMERS', null);

        return Promise.reject(e);
      }
    },

    async getAgreementsAll({ commit }) {
      try {
        const response = await api.getAgreementsList();

        console.log(response.data);

        commit('SET_AGREEMENTS', response.data);

        return Promise.resolve(response);
      } catch (e) {
        commit('SET_AGREEMENTS', null);

        return Promise.reject(e);
      }
    },
  },

  mutations: {
    SET_CUSTOMERS( state, payload : Array<any>) {
      state.customers = payload;
    },

    SET_AGREEMENTS( state, payload : Array<any>) {
      state.agreements = payload;
    },

  },
};
