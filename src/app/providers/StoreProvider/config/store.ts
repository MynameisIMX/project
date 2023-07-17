import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import {counterReducer} from "app/entities/Counter";
import {userReducer} from "entities/User";
import {loginReducer} from "features/AuthByUsername";

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
