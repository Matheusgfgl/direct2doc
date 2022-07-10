<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">

function fetchApi () { 
  return fetch('develop.directrad.com.br')
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
}

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