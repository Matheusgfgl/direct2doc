import axios from 'axios';
declare const require: any
//let axiosDefaults = require('axios/lib/defaults');
//axiosDefaults.baseURL = '';

// --- Config

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

// --- Instances

// InPeace API
const Direct2Doc = axios.create();

Direct2Doc.defaults.baseURL = 'http://develop.directrad.com.br';

// --- Export
export {
  Direct2Doc,
};
