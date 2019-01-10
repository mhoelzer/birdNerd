import {
    REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    TO_LOGIN
  } from "../Redux/types";
import { push } from "connected-react-router";
import axios from "axios";
import { store } from "../Redux/store";

export const GET_MESSAGES = "GET_MESSAGES";
export const ADD_TWEET = "ADD_TWEET";
// const api = "https://jhoelzer-kwitter.herokuapp.com";

export const register = registerData => dispatch => {
dispatch({
    type: REGISTER
});

fetch("", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
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