import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'username',
  initialState: {
    value: '',
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setValue} = userSlice.actions;
export default userSlice.reducer;
