import api from '../../api/appointments';
export default {
  state: {
    appointments: [],
  },

  getters: {
    appStaffRoles: (state: Object) => state.appointments,
  },

  actions: {
    async getUserShifts({ commit } , userId:string) {
      try {
        const res = await api.getAppointmentsList(userId);

        commit('SET_USER_APPOINTMENTS', res.data.oracaoMotivos);

        return Promise.resolve(res);
      } catch (e) {
        commit('SET_USER_APPOINTMENTS', null);

        return Promise.reject(e);
      }
    },
  },

  mutations: {
    SET_USER_APPOINTMENTS( payload : Array<any>) {
      state.appointments = payload;
    },

  },
};
