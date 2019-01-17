import { push } from "connected-react-router";
import store from "../Redux/store";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const EDIT_PROFILE_SUCCESS = "EDIT_PROFILE_SUCCESS";
export const EDIT_PROFILE_FAIL = "EDIT_PROFILE_FAIL";

const api = "https://shrouded-tundra-68436.herokuapp.com";

export const isEditingProfile = () => {
  return {
    type: EDIT_PROFILE
  };
};

export const editProfile = (password, about) => dispatch => {
  dispatch(isEditingProfile());

  const token = store.getState().token;
  let username = store.getState().username;

  let changes = {};
  if (password) changes["password"] = password;
  if (about) changes["about"] = about;

  fetch(api + "/users" + "/jim", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(changes)
  })
    .then(res => {
      // res.text().then(txt => console.log(txt));
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(user => {
      dispatch({
        type: EDIT_PROFILE_SUCCESS,
        userData: user.user
      });
    })

    .catch(err => {
      dispatch({
        type: EDIT_PROFILE_FAIL
      });
    });
};
