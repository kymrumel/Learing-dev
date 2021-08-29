import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    status: 'idle',
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, { payload }) => {
      state.value += payload;
    },
    decrement: (state, { payload }) => {
      state.value -= payload;
    },
    incrementByAmount: (state, { payload }: { payload: number }) => {
      state.value += payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;