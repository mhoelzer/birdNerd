import { push } from "connected-react-router";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILURE = "GET_USER_FAILURE";

// const birdNerdURL = "https://kwitter-api.herokuapp.com";
const birdNerdURL = "";

export const getUserInfo = userId => dispatch => {
  dispatch({ type: GET_USER });
  fetch(`${birdNerdURL}/users/${userId}`)
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
