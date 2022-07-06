import { Direct2Doc } from '../config/axios/index';

export default {
  getAgreementsList(churchId : string) {
    return Direct2Doc({
      method: 'POST',
      url: '/exame/listaConvenios',
    });
  },

  getClinicsList(churchId : string) {
    return Direct2Doc({
      method: 'POST',
      url: '/exame/listaClinicas',
    });
  },
};
