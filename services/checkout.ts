//responsável por realizar a chamada para nossa api, enviando os dados do checkout
//e recebendo o id o pedido gerado.
import api from './api';
import Checkout from '../dtos/Checkout';

//tipa os dados que vamos utilizar
interface CheckoutResponseData {
  order: {
    id: number; //vamos utilizar só o 'id' do pedido
  }
}

const CheckoutService = {
  //recebe um objeto do tipo 'Checkout'
  execute(checkout: Checkout) {
    //o 'order' retorna apenas o 'id: number', número do pedido que foi gerado
    return api.post<CheckoutResponseData>('/storefront/v1/checkouts', checkout)
      .then(response => response.data.order); 
  }
}

export default CheckoutService;