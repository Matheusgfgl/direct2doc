<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import  Direct2Doc  from './config/axios/index';
  import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Agreements',

  methods: {
  ...mapActions([
      'userSetAutoLoginData',
      'userLogOut'
    ]),
  },

  created() {
    if (sessionStorage.getItem('token')) {
      // If the session has token and user id save the data on vuex
      this.userSetAutoLoginData({
        origin: 'SESSION',
        token: sessionStorage.getItem('token'),
      });
    } else {
      // Redirect to login page
       this.$router.replace({ name: 'Login' }).catch(() => {});
    }
    Direct2Doc.interceptors.response.use(
      (response : any) => response,
        async (error: any) => {
          if (error.response) {
            /**
             * Checking if some request response has status code 401
             * if it's occurs then logout the user and reload page
            */
            if (error.response.status === 401 && (this.$route.name !== 'Login')) {
              // Logout the user
              await this.userLogOut();
              // Redirect to login page
              await this.$router.replace({ name: 'Login' }).catch(() => {});
              // Force reaload
              window.location.reload();
            }
          }

          return Promise.reject(error);
      },
    );
  }
});

</script>
<style lang="scss">
  // --- Default
  @import "~/assets/scss/base/_normalize.scss";
  @import "~/assets/scss/base/_fonts.scss";
  @import "~/assets/scss/base/_container.scss";
  @import "~/assets/scss/base/_colors.scss";
  @import "~/assets/scss/base/_variables.scss";

  // --- Common
  @import "~/assets/scss/common/_buttons.scss";
  @import "~/assets/scss/common/_form.scss";


  html {
    width: 100%;
    overflow-x: hidden !important;
    scroll-behavior: smooth;

    body {
      width: 100%;
      font-family: 'SourceSansPro', sans-serif;
      overflow-anchor: none;

      // --- Bot
      #chat-circle {
        z-index: 1;
        bottom: 6rem !important;
      }

      // Vue js modal
      .v--modal-overlay {
        background: rgba(0, 0, 0, 0.6);
      }

      &.v--modal-block-scroll {
        width: 100%;
      }
    }
  }
</style>