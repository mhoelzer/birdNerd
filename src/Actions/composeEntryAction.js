import { getNotebookEntries } from "./action";
import { url } from "./constants";

export const CREATE_ENTRY = "CREATE_ENTRY";
export const CREATE_ENTRY_SUCCESS = "CREATE_ENTRY_SUCCESS";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

// const birdNerdURL = "https://kwitter-api.herokuapp.com";
const URL = url;

export const composeEntry = text => (dispatch, getState) => {
  const token = getState().token;
  console.log(getState());
  let username = getState().username;
  dispatch({ type: CREATE_ENTRY });
  return fetch(`${URL}/users/${username}/notebook`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(text)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: CREATE_ENTRY_SUCCESS
      });
      dispatch(getNotebookEntries());

      // dispatch(getUserInfo(userId)); // get this conencted with the profile getuserinfo
    });
};

export const getUserInfo = username => dispatch => {
  dispatch({ type: GET_USER });
  fetch(`${URL}/users/${username}/notebook`)
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: GET_USER_SUCCESS, data: data.user });
    })
    .catch(err => {
      dispatch({ type: GET_USER_FAILURE, err });
    });
};
