import { push } from "connected-react-router";
import config from "../Constants/config.js";
import load from "../Helpers/spreadsheet.js";
export const GET_BIRD_DATA = "GET_BIRD_DATA";
export const GET_BIRD_DATA_SUCCESS = "GET_BIRD_DATA_SUCCESS";
export const GET_BIRD_DATA_FAIL = "GET_BIRD_DATA_FAIL";
export const GET_NOTEBOOK_ENTRIES = "GET_NOTEBOOK_ENTRIES";
export const GET_NOTEBOOK_ENTRIES_SUCCESS = "GET_NOTEBOOK_ENTRIES_SUCCESS";
export const GET_NOTEBOOK_ENTRIES_FAIL = "GET_NOTEBOOK_ENTRIES_FAIL";
export const LOGOUT = "LOGOUT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

const URL = "https://bird-nerd.herokuapp.com/"; 

export const getBirdData = () => dispatch => {
  dispatch({ type: GET_BIRD_DATA });

  const initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
        // 3. Initialize and make the API request.
        load(onLoad);
      });
  };

  const onLoad = (data, error) => {
    if (data) {
      const bird = data.bird;

      dispatch({ type: GET_BIRD_DATA_SUCCESS, bird });
    } else {
      dispatch({ type: GET_BIRD_DATA_FAIL, error });
    }
  };

  window.gapi.load("client", initClient);
};

export const getNotebookEntries = () => (dispatch, getState) => {
  dispatch({ type: GET_NOTEBOOK_ENTRIES });
  let username = getState().username;
  fetch(`${URL}/users/${username}/notebook`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({ type: GET_NOTEBOOK_ENTRIES_SUCCESS, data });
    });
};

export const logout = () => (dispatch, getState) => {
  const token = getState().token;
  const options = {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token
    }
  };
  fetch(`${URL}/Authorize/logout`, options)
    .then(response => {
      if (!response.ok) {
        response.json().then(err => {
          throw err;
        });
      }
      return response.json();
    })
    .then(data => {
      dispatch({ type: LOGOUT_SUCCESS });
      dispatch(push("/"));
      // alert("Thanks for visiting KWITTER! Come back soon!");
    })
    .catch(err => {
      dispatch({ type: LOGOUT_FAILURE, err });
    });
};
