import {CounterSchema} from "app/entities/Counter";
import {UserSchema} from "entities/User";


export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
}

