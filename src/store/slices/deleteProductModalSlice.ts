import { Product } from '@/types/Product';
import { createSlice } from '@reduxjs/toolkit';

export interface State {
  product: Product | null;
}

const initialState: State = {
  product: null,
};

const deleteModalSlice = createSlice({
  name: 'deleteModal',
  initialState,
  reducers: {
    setDeleteProduct: (state, action) => {
      state.product = action.payload;
    },
    dismissDeleteProduct: () => {
      return {
        product: null,
      };
    },
  },
});

export const { setDeleteProduct, dismissDeleteProduct } =
  deleteModalSlice.actions;
export default deleteModalSlice.reducer;
