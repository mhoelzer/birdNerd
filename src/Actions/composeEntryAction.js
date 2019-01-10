export const CREATE_ENTRY = "CREATE_ENTRY";
export const CREATE_ENTRY_SUCCESS = "CREATE_ENTRY_SUCCESS";

// const birdNerdURL = "https://kwitter-api.herokuapp.com";
const birdNerdURL = "";

export const composeEntry = text => (dispatch, getState) => {
  const token = getState().authentication.token;
  dispatch({ type: CREATE_ENTRY });
  return fetch(`${birdNerdURL}/messages`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: CREATE_ENTRY_SUCCESS
      });
      const userId = getState().authentication.id;
      // dispatch(getUserInfo(userId)); // get this conencted with the profile getuserinfo
    });
};
