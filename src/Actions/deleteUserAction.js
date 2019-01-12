import { push } from "connected-react-router";
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

// const birdNerdURL = "https://kwitter-api.herokuapp.com";
const birdNerdURL = "";

export const deleteUser = token => dispatch => {
    dispatch({ type: DELETE_USER });
    fetch(`${birdNerdURL}/users`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          response.json().then(err => {
            throw err;
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        dispatch({ type: DELETE_USER_SUCCESS });
        dispatch(push("/register"));
        //   window.confirm("Are you sure?");
      })
      .catch(err => {
        dispatch({ type: DELETE_USER_FAILURE, err });
      });
  };