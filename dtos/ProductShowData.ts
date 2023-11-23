import Product from './Product';

// pega o 'dtos Product' e add esses dois atributos a mais e cria um novo tipo 'ProductShow'
type ProductShow = {
  sells_count: number;
  favorited_count: number;
} & Product;

export default interface ProductShowData {
  product:ProductShow
};