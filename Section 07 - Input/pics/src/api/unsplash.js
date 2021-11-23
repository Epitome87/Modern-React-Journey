import axios from 'axios';

export default axios.create({
  headers: {
    Authorization: 'Client-ID tudod67-AOfDZ70L3dN2RwKKf-7h7ZazXgfhGsm_u6s',
  },
  baseURL: 'https://api.unsplash.com',
});
