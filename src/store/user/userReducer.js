import { USER_CHANGE_NAME } from "./userActionTypes";

export const userReducer = (userState, action) => {
  switch (action.type) {
    case USER_CHANGE_NAME:
      return { ...userState, fullName: action.payload }
    
    default:
      return userState;
  }
}