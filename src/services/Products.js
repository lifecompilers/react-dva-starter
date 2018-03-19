import request from '../utils/request';

export default async function getProducts() {
  return await request('/api/products');
}
