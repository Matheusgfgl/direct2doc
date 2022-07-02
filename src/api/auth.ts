import { Direct2Doc } from '../config/axios/index';

export default {
  postUserLogin(data : object) {
    return Direct2Doc({
      method: 'POST',
      url: '/security/login_check',
      data,
    });
  },
};
