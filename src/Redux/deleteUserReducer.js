import {
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../Actions/actions";

const initialState = {
  authentication: {
    loginAuthSuccess: false,
    token: null,
    id: ""
  },
  loggedInUser: {
    id: 0,
    username: "",
    displayName: "",
    about: "",
    createdAt: "",
    updatedAt: "",
    messages: []
  },
  // logoutUser: {
  //   succes:
  // }
  login: {},
  loginResult: "",
  messages: [],
  // if succes, it only reutnr usernme and dispalyname; result gets dumped into redux
  register: {},
  registerResult: "", // result is string, so default that
  userId: null,
  users: {}
};

const birdNerdReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_USER:
      return state;
    case DELETE_USER_FAILURE:
      return state;
    case DELETE_USER_SUCCESS:
      // do a slice and filter of based on the id or something based on all users?
      return {
        ...state,
        initialState
      };
    default:
      return state;
  }
};

export default birdNerdReducer;
