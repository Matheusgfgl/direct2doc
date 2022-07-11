import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'userLogOut',
      'appSetLoadingState',
    ]),

    async logOut() {
      console.log('mixing');
      this.appSetLoadingState({ context: 'GLOBAL', status: true });

      await this.$router.push({ name: 'Login' }).catch(() => {});

      try {
        await this.userLogOut();
      } catch (error) {
        //
      }

      this.appSetLoadingState({ context: 'GLOBAL', status: false });
    },
  },
};
