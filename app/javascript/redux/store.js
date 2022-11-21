import { configureStore } from '@reduxjs/toolkit';
import greetingSlice from './reducer/greetingSlice';

const store = configureStore({
  reducer: {
    greeting: greetingSlice
  }
});

export default store;