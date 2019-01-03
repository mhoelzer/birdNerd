export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";
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

  const token = store.getState();

  let changes = {};
  if (password) changes["password"] = password;
  if (about) changes["about"] = about;
};

fetch("Sheet1!A3:J", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
  body: JSON.stringify(changes)
}).then(res => {
  if (!res.ok) {
    res.json().then(err => {
      throw err;
    });
  }
  return res.json;
});
