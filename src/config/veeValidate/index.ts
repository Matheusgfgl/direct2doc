import dayjs from 'dayjs';
import { extend, setInteractionMode, configure } from 'vee-validate';
import {
  // eslint-disable-next-line camelcase
  required, email, confirmed, min, max, regex, alpha_spaces,
} from '@/vee-validate/dist/rules';
import { cpfValidator, passwordValidator } from '../../../helpers';

configure({
  // eslint-disable-next-line no-underscore-dangle
  defaultMessage: (field, values) =>  values,
  classes: {
    valid: 'input-item__field--valid',
    invalid: 'input-item__field--invalid',
  },
});

// Interaction
setInteractionMode('eager');

// Install rules
extend('required', required);
extend('email', email);
extend('confirmed', confirmed);
extend('min', min);
extend('max', max);
extend('regex', regex);
extend('alpha_spaces', alpha_spaces);
extend('birthdate', {
  params: ['lang'],
  validate(value, { lang }) {
    const language = lang.replace(/_/g, '-').toLowerCase();

    return dayjs(value, dayjs().locale(language).localeData().longDateFormat('L'), language, true).isValid()
      && dayjs(value, dayjs().locale(language).localeData().longDateFormat('L'), language, true).isBefore(dayjs());
  },
});
extend('cpf', {
  validate(value) {
    return cpfValidator(value);
  },
});
extend('password', {
  validate(value) {
    return passwordValidator(value);
  },
});
