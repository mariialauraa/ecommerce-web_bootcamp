import ProductShow from '../dtos/ProductShow';
import CheckoutItem from '../dtos/CheckoutItem';

//serve para fazer o agrupamento dos nossos itens
const AggregateItemsService = {
  execute(cartProducts: ProductShow[]): CheckoutItem[] {
    //percorre todos os itens no 'cartProducts'
    const checkoutItems = cartProducts.map(
      //extrai o 'id' dos produtos
      checkoutItem => checkoutItem.id
    ).filter(
      //ta checando se o 'index' da primeira vez q ele encontrar esse item, é o 'index' q ele ta iterando
      //sem repetir
      (checkoutItem, index, self) =>
        self.indexOf(checkoutItem) === index //'self' é o 'array' q o 'map' retornou
    );

    //já com os itens filtrados, sem repetir
    const items = checkoutItems.map(
      product_id => ({
        //retorna o 'id' do produto
        product_id,
        //e pega a quantidade de vezes que o 'product_id' repetiu nesse 'filter'
        //para saber quantos itens tem no nosso carrinho, qtas vezes aquele produto foi comprado
        quantity: cartProducts
          .filter(product => product.id === product_id).length
      })
    );

    return items;
  }
}

export default AggregateItemsService;