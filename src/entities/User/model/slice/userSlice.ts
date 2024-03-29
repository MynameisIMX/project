import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User, UserSchema} from "entities/User/model/types/user";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localstorage";

const initialState: UserSchema = {
  _inited: false,
};

export const userSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._inited = true
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    }
  },
});

export const userActions = userSlise.actions;
export const userReducer = userSlise.reducer;
