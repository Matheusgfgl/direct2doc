<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  import { Direct2Doc } from './config/axios';

export default defineComponent({
  name: 'Agreements',

  created() {
    if (sessionStorage.getItem('token')) {
      console.log(sessionStorage.getItem('token'))
      // If the session has token and user id save the data on vuex
      this.$store.dispatch('userSetAutoLoginData', {
        origin: 'SESSION',
        token: sessionStorage.getItem('token'),
      });
    }
    Direct2Doc.interceptors.response.use(
      (response) => response,
        async (error) => {
          if (error.response) {
            /**
             * Checking if some request response has status code 401
             * if it's occurs then logout the user and reload page
            */
            if (error.response.status === 401 && (this.$route.name !== 'userAccess')) {
              // Logout the user
              await this.$store.dispatch('userLogOut');
              // Reset any query string params
              await this.$router.replace({ name: 'churchHome', query: {} }).catch(() => {});
              // Force reaload
              window.location.reload();
            }
          } else {
            await this.$router.replace({
              name: 'ErrorPage',
              query: {
                message: this.$t('HOME.MESSAGE.ERROR.GENERIC'),
              },
            }).catch(() => {});
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