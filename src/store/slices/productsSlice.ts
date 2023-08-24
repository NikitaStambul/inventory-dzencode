import { getProducts } from '@/api/products';
import { Product } from '@/types/Product';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'orders/fetchProducts',
  async () => {
    const { data } = await getProducts();

    return data;
  },
);

export interface State {
  products: Product[];
  isLoaded: boolean;
  hasError: boolean;
}

const initialState: State = {
  products: [],
  isLoaded: false,
  hasError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoaded = true;
        state.hasError = true;
      });
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
