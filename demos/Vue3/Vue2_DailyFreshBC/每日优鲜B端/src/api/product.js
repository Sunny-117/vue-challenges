import axios from '@/axios';

export default {
  list(params) {
    return axios.get('/products/all', { params });
  },
  remove(params) {
    return axios.delete(`/products/${params.id}`);
  },
  add(params) {
    return axios.post('/products/add', params);
  },
  detail(id) { // 编辑功能需要的，通过id读取产品信息
    return axios.get(`/products/${id}`);
  },
  edit(params) {
    console.log(params);
    return axios.put('/products/edit', params);
  },
};
