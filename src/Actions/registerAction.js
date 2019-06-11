import { push } from "connected-react-router";
import { userLogin } from "./loginAction";
import { url } from "./constants";

export const REGISTER = "REGISTER";

const URL = url;

export const registerAction = credentials => dispatch => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials)
    };

    fetch(URL + "/Authorize/register", requestOptions)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
            return res.json().then(err => {
                throw err;
            });
        })
        .then(data => {
            dispatch({
                type: REGISTER,
                payload: data
            });
            dispatch(userLogin(credentials.username, credentials.password));
        })
        .catch(err => alert(err));
};
