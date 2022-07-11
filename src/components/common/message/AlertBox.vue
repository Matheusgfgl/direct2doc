<template>
  <div class="box-message">
    <div class="box-message__content">
      <div class="page-content__content">
        <div class="white-card">
          <div class="white-card__inner white-card__inner--padded">
            <div class="white-card__content">
              <div class="message">
                <div class="message__icon">
                  <SvgElement
                    type="other"
                    :name="messageIcon"
                    title="status"
                  />
                </div>

                <div
                  v-if="hasTitle"
                  class="message__title"
                >
                  <h1 class="title">
                    <slot name="title" />
                  </h1>
                </div>

                <div class="message__text">
                  <p class="text">
                    <slot />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlertBox',

    props: {
      type: {
        type: String,
        required: true,
        validator: (value) => ['success', 'warning', 'error'].indexOf(value) !== -1,
      },
    },

    computed: {
      messageIcon() {
        switch (this.type) {
        case 'success':
          return 'FeedbackSuccess';

        case 'warning':
          return 'FeedbackWarning';

        case 'error':
          return 'FeedbackError';

        default:
          return 'FeedbackWarning';
        }
      },

      hasTitle() {
        return !!this.$slots.title;
      },
    },
  };
</script>

<style lang="scss" >
  .box-message {
    margin: 0 auto;
    max-width: 90vw;

    @include screen(phone-up) {
      max-width: 80vw;
    }

    @include screen(tablet-up) {
      max-width: 50vw;
    }

    @include screen(desktop-big-up) {
      max-width: 40vw;
    }

    &__content {
      .message {
        &__icon {
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--primary);
        }

        &__title {
          padding-top: 1.5rem;

          .title {
            margin-bottom: 0;
            text-align: center;
            font-size: 1.8rem;
            font-weight: 600;
            color: var(--gray-500);
          }
        }

        &__text {
          padding-top: 1rem;

          .text {
            font-size: 1.2rem;
            margin-bottom: 0;
            text-align: center;
            color: var(--gray-450);

            &--featured {
              color: var(--primary);
            }
          }
        }

        &__action {
          margin: 0 auto;
          padding-top: 2rem;

          @include screen(tablet-up) {
            width: 80%;
          }
        }
      }
    }
  }
</style>
