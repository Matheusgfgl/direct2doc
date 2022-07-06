import axios from 'axios';

// --- Config

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

// --- Instances

// InPeace API
const Direct2Doc = axios.create({
  baseURL: 'develop.directrad.com.br',
  // timeout: 30000,
});

// --- Export
export {
  Direct2Doc,
};
