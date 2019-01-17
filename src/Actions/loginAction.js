import { push } from "connected-react-router";

export const LOGIN = "LOGIN"


const URL = "https://shrouded-tundra-68436.herokuapp.com"

export const userLogin = (username, password) => dispatch => {
    const header = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password })
    };
    
  
    fetch(URL + "/Authorize/login", header)
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          dispatch({
            type: LOGIN,
            username: username,
            password: password,
            id: data.id,
            success: data.success,
            token: data.token
          });
          alert("Successful Login")
          dispatch(push("/"));
        }
        else {
          alert("Error, log in failed");
        }
      });
  };
