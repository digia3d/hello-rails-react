import { configureStore } from '@reduxjs/toolkit';
import { greetingSlice } from './reducer/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingSlice
  }
});
