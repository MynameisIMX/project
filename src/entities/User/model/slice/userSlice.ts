import { createSlice } from "@reduxjs/toolkit";
import {UserSchema} from "entities/User/model/types/user";

const initialState: UserSchema = {};

export const userSlise = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const userActions = userSlise.actions;
export const userReducer = userSlise.reducer;
