import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/loginSchema";
import {loginByUsername} from "features/AuthByUsername/model/services/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
  isLoading: false,
  username: '',
  password: ''
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      // You can chain calls, or have separate `builder.addCase()` lines each time
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      // You can match a range of action types
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const loginActions = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
