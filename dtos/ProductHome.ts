import Product from './Product';

/* Pega da 'api' da parte 'Produto' apenas esses atributos */
type ProductHome = 
  Pick<Product, 'id' | 'name' | 'description' | 'price' | 'image_url'>;

export default ProductHome;