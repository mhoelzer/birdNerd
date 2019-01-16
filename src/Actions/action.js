import config from "../Constants/config.js";
import load from "../Helpers/spreadsheet.js";
export const GET_BIRD_DATA = "GET_BIRD_DATA";
export const GET_BIRD_DATA_SUCCESS = "GET_BIRD_DATA_SUCCESS";
export const GET_BIRD_DATA_FAIL = "GET_BIRD_DATA_FAIL";

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

  // window.gapi.load("client", initClient);
};
