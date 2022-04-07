import { UserInfoActionType } from './actions';
import { UserInfoReducerType, ActionType } from './types';

const initialState: UserInfoReducerType = {
  name: '',
  email: '',
  password: '',
};

const userInfoReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case UserInfoActionType.setUserName:
      return {
        ...state,
        name: action.payload,
      };

    case UserInfoActionType.clearUserName:
      return {
        ...initialState,
      };

    case UserInfoActionType.setEmail:
      return {
        ...state,
        email: action.email,
      };

    case UserInfoActionType.setPassword:
      return {
        ...state,
        password: action.password,
      };

    default:
      return state;
  }
};

export default userInfoReducer;
