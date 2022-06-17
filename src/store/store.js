import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {dumplingApi} from '../services/dumplingApi';
import cartReducer from '../store/slice/cartSlice';
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [dumplingApi.reducerPath]: dumplingApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dumplingApi.middleware),
});

setupListeners(store.dispatch);
