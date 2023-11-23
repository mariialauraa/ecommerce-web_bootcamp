import api from './api';
import Product from '../dtos/Product';

// pega o 'dtos Product' e add esses dois atributos a mais e cria um novo tipo 'ProductShow'
type ProductShow = {
  sells_count: number;
  favorited_count: number;
} & Product;

interface ProductShowData {
  product: ProductShow;
}

const ProductShowService = {
  show: (url: string) => {
    return api.get<ProductShowData>(url).then(response => response.data.product);
  }
}

export default ProductShowService;