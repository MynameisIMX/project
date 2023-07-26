import {userActions, userReducer} from "entities/User/model/slice/userSlice";
import {getUserAuthData} from "entities/User/model/selectors/getUserAuthData/getUserAuthData";

export {
  userReducer,
  userActions,
}

export {
  User,
  UserSchema
} from "entities/User/model/types/user";

export {
  getUserAuthData
}
