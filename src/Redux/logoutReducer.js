import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../Actions/actions";

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
    case LOGOUT:
      return state;
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedInUser: initialState.loggedInUser,
        authentication: initialState.authentication
      };
    case LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default birdNerdReducer;
