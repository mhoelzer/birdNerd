import {
  GET_BIRD_DATA,
  GET_BIRD_DATA_SUCCESS,
  GET_BIRD_DATA_FAIL,
  GET_NOTEBOOK_ENTRIES,
  GET_NOTEBOOK_ENTRIES_SUCCESS,
  GET_NOTEBOOK_ENTRIES_FAIL
} from "../Actions/action";
import { LOGIN } from "../Actions/loginAction";

const initialState = {
  bird: [],
  error: { message: "" },
  username: "",
  notebookEntries: [],
  token: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BIRD_DATA:
      return state;
    case GET_BIRD_DATA_SUCCESS:
      return { ...state, bird: action.bird };
    case GET_BIRD_DATA_FAIL:
      return { ...state, error: action.error };
    case GET_NOTEBOOK_ENTRIES:
      return state;
    case GET_NOTEBOOK_ENTRIES_SUCCESS:
      return { ...state, notebookEntries: action.data };
    case GET_NOTEBOOK_ENTRIES_FAIL:
      return state;
    case LOGIN:
      return { ...state, token: action.token, username: action.username };
    default:
      return state;
  }
};
