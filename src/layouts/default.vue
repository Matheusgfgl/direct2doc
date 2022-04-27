<template>
  <div
    class="newLayout-layout"
    :class="layoutClass"
  >
    <main class="page-content">
      <router-view v-slot="{ Component }">
        <transition 
          name="slide-fade"
          mode="out-in"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'Default',

    metaInfo() {
      return {
        title: 'Inspiralli ON',
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
      padding-top: 3.75rem;
      flex: 1;

      // Block with reduced width
      /*&__desktop {
        &-large {
          @include screen(tablet-up) {
            width: 80%;
            margin: 0 auto;
          }
        }

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
      }
      */
    }
  }
</style>
