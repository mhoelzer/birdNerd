
import { push } from "connected-react-router";

export const REGISTER = "REGISTER"

export const registerAction = (username, password) => dispatch => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      })
    };
  
    fetch("http://localhost:8000/Authorize/register", requestOptions)
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: REGISTER,
          payload: data
        });
        alert("Success");
        dispatch(push("/login"));
      });
    dispatch(push("/login"));
  };

