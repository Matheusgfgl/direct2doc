import { Direct2Doc } from '../config/axios/index';

export default {
  getPatientsList() {
    return Direct2Doc({
      method: 'GET',
      url: '/exame/listaPacientes',
    });
  },
};
