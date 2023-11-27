import api from './api';
import ProductSearch from '../dtos/ProductSearch';

interface WishlistIndexData {
  wish_items: ProductSearch[];
}

//método 'index' para obter os produtos da lista de desejos do usuário logado
const WishlistService = {
  index(url: string) {
    return api.get<WishlistIndexData>(url).then(response => response.data);
  },

  add(productId: number) {
    return api.post<void>('/storefront/v1/wish_items', { wish_item: { product_id: productId } });
  }
}

export default WishlistService;