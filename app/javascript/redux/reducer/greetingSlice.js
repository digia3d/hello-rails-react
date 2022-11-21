import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'http://localhost:3000/api/v1/greetings';

const fetchGreeting = createAsyncThunk(
  'greeting/fetchGreeting',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log(data);
    return data;
  }
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    value: [],
    reducers: {
      addGreeting: (state, action) => {
        state.value.push(action.payload);
      },
    },
    extraReducers: {
      [fetchGreeting.fulfilled]: (state, action) => {
        state.status = 'success';
        state.push(action.payload);
        console.log(state);
      },
    }
  }
});

export const { addGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;