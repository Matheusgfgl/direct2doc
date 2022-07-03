<template>
  <div class="login">
    <img src="../../public/direct2doc.png" alt="Logo" class="login__logo">
      <div class="login__content">
      <Form v-slot="{ invalid }"
        ref="accessForm"
        tag="form"
        class="form-styled login__form container"
        @submit="handleSubmit"
      >
        <p class="login__content__text">Acesse consultas e prontuários com toda praticidade e segurança</p>
        <div class="access-page__error">
          <AlertMessage
            v-if="!!formFeedback.message"
            :type="formFeedback.type"
          >
            <template slot="icon">
              <SvgElement
                name="Alert"
                title="Erro"
                width="1.5rem"
                height="100%"
              />
            </template>
            {{ formFeedback.message }}
          </AlertMessage>
        </div>

        <!-- User email -->
        <Field  v-slot="{ classes }"
          ref="emailField"
          key="email-input"
          name="Email"
          class="input-item"
          tag="div"
          :rules="isRequired(user.email)"
        >
          <div class="input-item input-item__floated-label">
            <label
              for="email"
              class="input-item__label input-item__label"
            >
              Email
            </label>
            <input
              v-model="user.email"
              type="email"
              name="email"
              inputmode="email"
              placeholder="Usuário"
              class="input-item__field
                input-item__field--normal input-item__field"
              :class="classes"
              mode="aggressive"
              @blur="validateEmail"
            >
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>
        </Field>
        <!-- User password -->
        <Field  v-slot="{ errors, classes }"
          key="password-input"
          name="senha"
          class="input-item"
          tag="div"
          :rules="isRequired(user.password)"
          vid="senha"
        >
          <div class="input-item input-item__floated-label">
            <label
              for="senha"
              class="input-item__label input-item__label"
            >
            Senha
            </label>
            <input
              v-model="user.password"
              :type="passwordType"
              name="senha"
              placeholder="Senha"
              class="input-item__field
              input-item__field--normal input-item__field"
              :class="classes"
            >
            <button
              v-if="!showPassword"
              class="icon icon--hidden"
              @click.prevent="tooglePassword"
            >
              <SvgElement
                name="PasswordHidden"
                title="Password"
              />
            </button>
            <button
              v-else
              class="icon"
              @click.prevent="tooglePassword"
            >
              <SvgElement
                name="PasswordShow"
                title="Password"
              />
            </button>
          </div>

          <div class="input-item__feedback input-item__feedback--invalid">
            {{ errors[0] }}
          </div>
        </Field>
        <div class="login__form__actions">
          <input class="checkbox" type="checkbox">
          <span class="label">Lembrar</span>
          <button
          type="submit"
          class="login__form__button btn btn--color-primary"
          :class="{ 'btn--disabled': invalid }"
        >
          <span class="btn__text">
            Login
          </span>
        </button>
        </div>
      </Form>
      <a class="login__forgot-password" href="https://www.direct2doc.com.br/forgot_password" title="Sign Up">Esqueci minha senha</a>
      </div>
    </div>
</template>

<script lang="ts">
import { useField } from 'vee-validate';
import { mapActions } from 'vuex';

export default {
  name: 'Login',

  /*"setup(): Object {
    const { value, errorMessage } = useField('field',  this.isRequired);

    return {
      value,
      errorMessage,
    };
  }, */

  data() {
    return {
      formFeedback: {
        type: null,
        message: null,
      },
      user: {
        email: '',
        password: '',
      },
      loading: false,
      showPassword: false,
      showConfirmationPassword: false,
    };
  },

  computed: {
    passwordType(): string {
      return this.showPassword ? 'text': 'password';
    },
  },

  methods: {
    ...mapActions([
      'userLogin',
    ]),

    tooglePassword(): void {
      this.showPassword = !this.showPassword;
    },

    isRequired(value: boolean) {
      return value ? true : 'Usuario e senha são obrigatórios';
    },

    async handleSubmit() {
      this.loading = true

      const isFormValid = this.user.email && this.user.password;

      if (!isFormValid) {
        this.formFeedback = {
          type: 'error',
          message: 'Precisamos de seu email e senha para continuar',
        };
        return;
      }

      try {
        //await this.userLogin(this.user);

        this.$router.replace({ name: 'Appointments' });
      } catch (error) {
        this.formFeedback = {
          type: 'error',
          message: 'Usuario ou senha incorretos',
        };
      }

      this.$router.replace({ name: 'Appointments' });

      this.loading = false;
    },

  },
}

</script>

<style lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url(../../public/login-background.jpeg) no-repeat center center fixed;

    &__content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background: var(--white);
      margin: 2rem 0;
      padding: 1.5rem;
      max-width: 25rem;
      font-size: 14px;

      &__text {
        text-align: center;
        padding: 0 1.5rem;
        color: #666666;
      }
    }

    &__logo {
      width: 14rem;
    }

    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      border-bottom: solid 1px var(--gray-250);
      padding-bottom: 2rem;

      &__actions{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        margin-top: 1.5rem;
        position: relative;

        .checkbox {
          width: 1.5rem;
          height: 1.5rem;
        }

        .label {
          margin-left: 0.5rem;
          color: #666666;
        }
      }

      &__button {
        width: 6rem;
        position: absolute;
        right: 0;
        padding: 0.5rem !important;
        border: solid 1px var(--gray-500);
      }
    }

    &__forgot-password {
      margin-top: 1rem;
      text-align: left;
      color: #3c8dbc;
    }

    .icon {
      position: absolute;
      right: 1rem;
      bottom: 1.2rem;
      color: var(--gray-400);

      &--hidden {
        bottom: 1rem !important;
      }
    }
  }


</style>