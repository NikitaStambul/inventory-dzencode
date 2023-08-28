import { Order, mockOrders } from '@/types/Order';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchOrders = createAsyncThunk('orders/fetchOrders', async () => {
  return mockOrders;
});

export interface State {
  orders: Order[];
  isLoaded: boolean;
  hasError: boolean;
  selected?: number;
}

const initialState: State = {
  orders: [],
  isLoaded: false,
  hasError: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const newId =
        state.orders.reduce((max, product) => {
          return product.id > max ? product.id : max;
        }, 0) + 1;
      const newOrder: Order = {
        ...action.payload,
        id: newId,
        date: new Date().toString(),
      };

      state.orders.unshift(newOrder);
    },
    selectOrder: (state, action) => {
      state.selected = action.payload;
    },
    unselectOrder: (state) => {
      state.selected = undefined;
    },
    removeProductFromOrder: (state, action) => {
      const { orderId, productId } = action.payload;

      const order = state.orders.find((order) => order.id === orderId);

      if (order) {
        order.products = order.products.filter((id) => id !== productId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoaded = true;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isLoaded = true;
        state.hasError = true;
      });
  },
});

export const { addOrder, selectOrder, unselectOrder, removeProductFromOrder } =
  ordersSlice.actions;
export default ordersSlice.reducer;
