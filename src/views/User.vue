<template>
  <div class="home-page">
    <h1>user</h1>
    </div>
</template>

<script lang="ts">
import VueRouter from 'vue-router';

export default {
  name: 'Home',

  data() {
    return {
      //
    };
  },

  computed: {
    //
  },
}

</script>

<style lang="scss">
  .home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: var(--gray-400);
    width: 100%;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: var(--white);
      margin: 2rem 0;
      padding: 1.5rem;
      max-width: 26rem;
      font-size: 14px;
    }
  }


</style>