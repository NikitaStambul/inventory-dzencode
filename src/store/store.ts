import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/ordersSlice';
import productsReducer from './slices/productsSlice';
import deleteProductModalReducer from './slices/deleteProductModalSlice';

export const store = configureStore({
  reducer: {
    ordersState: ordersReducer,
    productsState: productsReducer,
    deleteProductModalState: deleteProductModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
