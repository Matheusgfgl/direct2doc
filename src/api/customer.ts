import { Direct2Doc } from '../config/axios/index';

export default {
  getAgreementsList() {
    return Direct2Doc({
      method: 'POST',
      url: '/exame/listaConvenios',
    });
  },

  getClinicsList() {
    return Direct2Doc({
      method: 'POST',
      url: '/exame/listaClinicas',
    });
  },
};
