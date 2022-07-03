

<script lang="ts">
  // Mixins
  import clientBootstrap from './mixins/screenSizeMixin';
  import defineScreenSize from './mixins/defineScreenSizeMixin';

  export default {
    name: 'App',

    mixins: [
      clientBootstrap,
      defineScreenSize,
    ],

    computed: {
      routerViewKey(): any {
        //const matched = this.$route.matched.find((record) => record.meta.layout);

        return 'DefaultLayout';
        //return matched ? matched.meta.layout : 'DEFAULT';
      },
    },

    created(){
      console.log('app');
    }
  }

</script>

<template>
  <div id="app">
    <router-view v-slot="{ Component }" :key="routerViewKey">
      <transition
       name="slide-fade"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
 // --- Default
  @import "@/assets/scss/base/_normalize.scss";
  @import "@/assets/scss/base/_fonts.scss";
  @import "@/assets/scss/base/_container.scss";
  @import "@/assets/scss/base/_colors.scss";
  @import "@/assets/scss/base/_variables.scss";
  @import "@/assets/scss/base/_normalize.scss";
  @import "@/assets/scss/base/_breakpoints.scss";

  // --- Common
  @import "@/assets/scss/common/_buttons.scss";
  @import "@/assets/scss/common/_form.scss";
  @import "@/assets/scss/common/_transitions.scss";
  @import "@/assets/scss/common/carousel.scss";

</style>
