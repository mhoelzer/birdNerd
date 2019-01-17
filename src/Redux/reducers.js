import {
  GET_BIRD_DATA,
  GET_BIRD_DATA_SUCCESS,
  GET_BIRD_DATA_FAIL,
  GET_NOTEBOOK_ENTRIES,
  GET_NOTEBOOK_ENTRIES_SUCCESS,
  GET_NOTEBOOK_ENTRIES_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from "../Actions/action";
import { LOGIN } from "../Actions/loginAction";
import {REGISTER} from "../Actions/registerAction"

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
    case LOGOUT:
      return state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        error: initialState.error,
        token: initialState.token,
        username: initialState.username,
        notebookEntries: initialState.notebookEntries
      };
    case LOGOUT_FAILURE:
      return state;
      case REGISTER:
      return {
        ...state,
        username: action.username,
        password: action.password
      };
    default:
      return state;
  }
};
