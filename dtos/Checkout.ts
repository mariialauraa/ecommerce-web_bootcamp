import CheckoutItem from './CheckoutItem';

interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  post_code: string;
}

interface Checkout {
  payment_type: string;
  installments: string;
  coupon_id?: number; // '?' não é obrigatório
  card_hash?: string; // '?' não é obrigatório
  document: string;
  items: CheckoutItem[]; //um array de 'CheckoutItem'
  address?: Address; // '?' não é obrigatório
}

export default Checkout;