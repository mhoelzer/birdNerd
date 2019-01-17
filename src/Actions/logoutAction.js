// import { push } from "connected-react-router";
// export const LOGOUT = "LOGOUT";
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// // const birdNerdURL = "https://kwitter-api.herokuapp.com";
// const birdNerdURL = "";

// export const logout = () => dispatch => {
//     fetch(`${birdNerdURL}/auth/logout`)
//       .then(response => {
//         if (!response.ok) {
//           response.json().then(err => {
//             throw err;
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         dispatch({ type: LOGOUT_SUCCESS });
//         dispatch(push("/"));
//         // alert("Thanks for visiting KWITTER! Come back soon!");
//       })
//       .catch(err => {
//         dispatch({ type: LOGOUT_FAILURE, err });
//       });
//   };
  
  