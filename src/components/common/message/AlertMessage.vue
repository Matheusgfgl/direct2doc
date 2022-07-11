<template>
  <div
    class="alert-message"
    :class="customClass"
  >
    <div
      class="alert-message__content"
      :class="{ 'alert-message__content--warning': type === 'warning' }"
      role="alert"
    >
      <div class="alert-message__content__icon">
        <slot name="icon" />
      </div>
      <span class="alert-message__content__text">
        <slot />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlertMessage',

    props: {
      type: {
        type: String,
        default: 'error',
      },
    },

    computed: {
      customClass() {
        switch (this.type) {
        case 'success':
          return 'alert-message--success';
        case 'error':
          return 'alert-message--danger';
        case 'warning':
          return 'alert-message--warning';
        case 'info':
          return 'alert-message--info';
        default:
          return 'alert-message--danger';
        }
      },
    },
  };
</script>

<style lang="scss" scoped>
  .alert-message {
    text-align: center;
    border-radius: 0.25rem;
    border: 2px solid transparent;
    margin-bottom: 1rem;

    &__content {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: row;
      position: relative;
      padding: 0.5rem 1.25rem;

      //@include screen(tablet-big-up) {
        //justify-content: center;
      //}

      &__icon {
        margin-right: 1rem;
        color: #dd4b39;

        //@include screen(tablet-big-up) {
         // margin-right: 0.5rem;
        //}
      }

      &--warning {
        justify-content: flex-start;
      }
    }

    &--danger {
      color: var(--gray-550);
      background-color: #f8d7da;
      border-color: #dd4b39;
    }

    &--success {
      color: #155724;
      background-color: #d4edda;
      border-color: #c3e6cb;
    }

    &--warning {
      color: var(--gray-450);
      background-color: #fff3cd;
      border-color: orange;
      width: 100%;
      max-width: 30rem;
    }

    &--info {
      color: #0c5460;
      background-color: #d1ecf1;
      border-color: #bee5eb;
    }
  }
</style>
