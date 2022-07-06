import api from '../../api/customer';
export default {
  state: {
    clinics: [],
    agreements: [],
  },

  getters: {
    getClinics: (state: Object) => state.clinics,
    getAgreements: (state: Object) => state.agreements,
  },

  actions: {
    async getClinicsAll({ commit }) {
      try {
        const res = await api.getClinicsList();

        commit('SET_USER_patients', res.data.oracaoMotivos);

        return Promise.resolve(res);
      } catch (e) {
        commit('SET_USER_patients', null);

        return Promise.reject(e);
      }
    },

    async getAgreementsAll({ commit }) {
      try {
        const res = await api.getAgreementsList();

        commit('SET_USER_patients', res.data.oracaoMotivos);

        return Promise.resolve(res);
      } catch (e) {
        commit('SET_USER_patients', null);

        return Promise.reject(e);
      }
    },
  },

  mutations: {
    SET_CLINICS_LIST( payload : Array<any>) {
      state.clinics = payload;
    },

    SET_AGREEMENTS_LIST( payload : Array<any>) {
      state.agreements = payload;
    },

  },
};
