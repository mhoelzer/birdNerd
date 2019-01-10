
import { push } from "connected-react-router";

export const REGISTER = "REGISTER"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAIL = "REGISTER_FAIL"
export const TO_LOGIN = "TO_LOGIN"
// const api = "https://jhoelzer-kwitter.herokuapp.com";

export const registerAction = (username, password) => dispatch => {
dispatch({
    type: REGISTER
});

fetch("localhost:8000/Authorize/register", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({username: username, password: password})
})
    .then(res => {
    if (!res.ok) {
        res.json().then(err => {
        throw err;
        });
    }
    return res.json();
    })
    .then(data => {
    // dispatch here
    dispatch({
        type: REGISTER_SUCCESS,
        register: data,
        result: "Successfully Registered"
    });
    dispatch(push("/"));
    })
    .catch(err => {
    // dispatch here on fail
    dispatch({
        type: REGISTER_FAIL,
        result: "Failed to Register"
    });
    alert("Username Taken. Please Choose another");
    });
};

export const loginLink = () => {
    return {
        type: TO_LOGIN
    };
};