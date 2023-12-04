import Order from './Order';

type OrdersList = {
  status: string;
  total_amount: string;
} & Pick<Order, 'id' | 'payment_type'>; //pegando do 'Order' o 'id' e 'payment_type'

export default OrdersList;