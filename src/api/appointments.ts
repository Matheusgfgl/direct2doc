import { Direct2Doc } from '../config/axios/index';

export default {
  getAppointmentList(churchId : string) {
    return Direct2Doc({
      method: 'GET',
      url: `${process.env.VUE_APP_API_V1}/ebd/?igreja=${churchId}`,
    });
  },
};
