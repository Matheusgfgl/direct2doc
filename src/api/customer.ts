import { Direct2Doc } from '../config/axios/index';

export default {
  getAgreementsList() {
    return Direct2Doc({
      method: 'GET',
      url: '/exame/listaConvenios',
    });
  },

  getClinicsList() {
    return Direct2Doc({
      method: 'GET',
      url: '/exame/listaClinicas',
    });
  },
};
