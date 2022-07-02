import axios from 'axios';

// --- Config

// Common
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';

// --- Instances

// InPeace API
const Direct2Doc = axios.create({
  baseURL: process.env.VUE_APP_API_V1,
  // timeout: 30000,
});

// Realtime API
const realtimeAPI = axios.create({
  baseURL: process.env.VUE_APP_PUSHER_API,
  headers: {
    common: {
      Authorization: `Bearer ${process.env.VUE_APP_PUSHER_API_BEARER}`,
    },
  },
});

// --- Export
export {
  Direct2Doc,
  realtimeAPI,
};
