import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductShow from '../../../../dtos/ProductShow';

const cartReducer = createSlice({
  name: 'cartProducts',
  initialState: [] as ProductShow[],
  reducers: {
    addCartProduct(state: ProductShow[], action: PayloadAction<ProductShow>) {
      return [...state, action.payload]; //um 'array' contendo todos os dados do 'state' + 'payload'
    },
    removeCartProduct(state: ProductShow[], action: PayloadAction<number>) {
      //cria um 'array' contendo apenas os itens q o 'index' for diferente do 'payload'
      return [...state.filter((_, index) => index !== action.payload)];
    }
  }
});

export const { addCartProduct, removeCartProduct } = cartReducer.actions;
export default cartReducer.reducer;