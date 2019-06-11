import { push } from "connected-react-router";
import { url } from "./constants";

export const LOGIN = "LOGIN";

const URL = url;

export const userLogin = (username, password) => dispatch => {
  const header = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username: username, password: password })
  };

  return fetch(URL + "/Authorize/login", header)
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
        alert(`Good Day, ${username}, and Welcome to BIRD NERD!`);
        dispatch(push("/"));
      } else {
        alert("Error, log in failed");
      }
    });
};
