import { Direct2Doc } from '../config/axios/index';

export default {
  getAppointmentList(churchId : string) {
    return Direct2Doc({
      method: 'POST',
      url: 'develop.directrad.com.br/exame/ajax_list',
    });
  },
  saveAppointment(data : Object) {
    return Direct2Doc({
      method: 'POST',
      url: 'develop.directrad.com.br/exame/save',
      data,
    });
  },
};
