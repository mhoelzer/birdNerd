import {
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL
} from "./action.js";
import { store } from "../Redux/store";

export const isEditingProfile = () => {
  return {
    type: EDIT_PROFILE
  };
};

export const editProfileSuccess = () => {
  return {
    type: EDIT_PROFILE_SUCCESS
  };
};

export const editPrifleFailed = () => {
  return {
    type: EDIT_PROFILE_FAIL
  };
};

export const editProfile = (password, about) => dispatch => {
  dispatch(isEditingProfile());

  fetch();
};
