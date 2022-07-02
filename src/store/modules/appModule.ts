export default {
  state: {
    appLoading: [],
    staffRoles: [
      'ROLE_ADMIN',
      'ROLE_ADMIN_CONTENT',
      'ROLE_SUPER_ADMIN',
    ],
  },

  getters: {
    /** Search for a load in an specific context
     * If has some GLOBAL context in stack, then this will return false
     */
    appLoading: (state: { appLoading: any[]; }) => (context: any) => !!state.appLoading.find(
      (loadState) => loadState.context === 'GLOBAL' || loadState.context === context,
    ),
    appStaffRoles: (state: { staffRoles: any; }) => state.staffRoles,
    appScreenSize: (state: { screen: any; }) => state.screen,
  },

  actions: {
    /**
     * Receives the load state of a context
     * The context is an strings and the global value is 'GLOBAL'
     */
    appSetLoadingState({ commit }, { context, status = false }) {
      commit('APP_SET_LOADING_STATE', {
        /**
         * You can pass 'GLOBAL' to start de loading in global level
         * or can pass any value to set the loading in places that the value is passed
         * */
        context,
        status,
      });
    },

    /**
     * Reset de loading state
     */
    appResetLoadingState({ commit }) {
      commit('APP_RESET_LOADING_STATE');
    },

    appSetScreenSize({ commit }: any, size: any) {
      commit('APP_SET_SCREEN_SIZE', size);
    },
  },

  mutations: {
    APP_SET_LOADING_STATE(state: { appLoading: { context: any; status: any; }[]; }, { context, status }: any) {
      if (!status) {
        const index = state.appLoading.findIndex(
          (loadingState: { context: any; }) => loadingState.context === context,
        );

        if (index === -1) {
          return;
        }

        state.appLoading.splice(index, 1);
      } else {
        state.appLoading.push({
          context,
          status,
        });
      }
    },

    APP_RESET_LOADING_STATE(state: { appLoading: never[]; }) {
      state.appLoading = [];
    },

    APP_SET_SCREEN_SIZE(state: { screen: any; }, payload: any) {
      state.screen = payload;
    },
  },
};
