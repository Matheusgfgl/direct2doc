import api from '../../api/patients';
export default {
  state: {
    patients: [],
  },

  getters: {
    getPatients: (state: Object) => state.appointments,
  },

  actions: {
    async getAllPatients({ commit }) {
      try {
        const res = await api.getPatientsList();

        commit('SET_PATIENTS', res.data.oracaoMotivos);

        return Promise.resolve(res);
      } catch (e) {
        commit('SET_PATIENTS', null);

        return Promise.reject(e);
      }
    },
  },

  mutations: {
    SET_PATIENTS( payload : Array<any>) {
      state.patients = payload;
    },

  },
};
