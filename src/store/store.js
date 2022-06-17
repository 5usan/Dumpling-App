import {configureStore} from '@reduxjs/toolkit';
import exampleReducer from './slice/exampleSlice';
import {setupListeners} from '@reduxjs/toolkit/query';
import {exampleApi} from '../services/exampleApi';

export const store = configureStore({
  reducer: {
    counter: exampleReducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(exampleApi.middleware),
});

setupListeners(store.dispatch);
