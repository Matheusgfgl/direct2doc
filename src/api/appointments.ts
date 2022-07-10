import { Direct2Doc } from '../config/axios/index';

export default {
  getAppointmentList(data : Object) {
    return Direct2Doc({
      method: 'POST',
      url: '/exame/ajax_list',
      data,
    });
  },
  saveAppointment(data : Object) {
    return Direct2Doc({
      method: 'GET',
      url: '/exame/save',
      data,
    });
  },
};
