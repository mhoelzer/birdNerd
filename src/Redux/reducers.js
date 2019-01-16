import {
  GET_BIRD_DATA,
  GET_BIRD_DATA_SUCCESS,
  GET_BIRD_DATA_FAIL
} from "../Actions/action";

const initialState = { bird: [], error: { message: "" }, username: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BIRD_DATA:
      return state;
    case GET_BIRD_DATA_SUCCESS:
      return { ...state, bird: action.bird };
    case GET_BIRD_DATA_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
