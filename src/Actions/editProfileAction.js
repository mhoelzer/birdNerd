import { push } from "connected-react-router";
import { store } from "../Redux/store";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

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

export const editProfileFailed = () => {
  return {
    type: EDIT_PROFILE_FAIL
  };
};

export const editProfile = (password, about) => dispatch => {
  dispatch(isEditingProfile());

  const token = store.getState();
};
