import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
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
    case GET_USER:
      return state;
    case GET_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.data
      };
    case GET_USER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default birdNerdReducer;
