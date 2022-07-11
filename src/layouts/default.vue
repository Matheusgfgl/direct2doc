<template>
  <div
    class="newLayout-layout"
    :class="layoutClass"
  >
    <Header />
    <main class="page-content">
      <Navbar />
      <div class="page-content-large">
        <router-view v-slot="{ Component }">
          <transition 
            name="slide-fade"
            mode="out-in"
          >
            <component :is="Component" />
          </transition>
      </router-view>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
  import Header from '../components/common/Header.vue';
  import Navbar from '../components/common/Navbar.vue';

  export default {
    name: 'Default',

    components: {
      Header,
      Navbar,
    },

    metaInfo() {
      return {
        title: 'Direct2Doc',
      };
    },
  };
</script>

<style lang="scss">
  .newLayout-layout {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background: var(--white);
    z-index: 0;

    // Content of pages
    .page-content {
      height: 100%;
      display: flex;
      flex-direction: row;
  

      &-large {
        width: 85%;
      }
  /*
      &-medium {
        @include screen(tablet-up) {
          width: 60%;
          margin: 0 auto;
        }
      }

      &-small {
        @include screen(tablet-up) {
          width: 40%;
          margin: 0 auto;
        }
      }
    */
    }  
  }
</style>
