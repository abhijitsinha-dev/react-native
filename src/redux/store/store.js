import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';

const store = configureStore({
  reducer: {
    username: userReducer,
  },
});

export default store;
