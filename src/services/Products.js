import request from '../utils/request';

export default async function getProducts() {
  return request('/api/products');
}
