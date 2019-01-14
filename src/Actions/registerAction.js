
import { push } from "connected-react-router";

export const REGISTER = "REGISTER"

const URL = "http://localhost:8000/"

export const registerAction = (credentials) => dispatch => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    };
  
    fetch(URL + "Authorize/register", requestOptions)
      .then(res => {
        if (res.status === 200) {
          return res.json()
        }
        return res.json().then(err => {throw err})
      })
      .then(data => {
        dispatch({
          type: REGISTER,
          payload: data
        });
        alert("Success");
        dispatch(push("/login"));
      })
      .catch(err => alert("Username has been taken. Please choose another."))
    dispatch(push("/login"));
  };

