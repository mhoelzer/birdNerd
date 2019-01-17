// export const REGISTER = "REGISTER";
  
//   const initialState = {
//     messages: [],
//     profile: {
//       username: null,
//       password: null,
//       token: null,
//       id: null,
//       success: null
//     },
//     users: [],
//     logout: { success: false, message: "" },
//     likes: [],
//     userData: {
//       id: 0,
//       username: "",
//       displayName: "",
//       createdAt: "",
//       messages: [],
//       about: ""
//     }
//   };
  
//   export default function(state = initialState, action) {
//     switch (action.type) {
  
//       case REGISTER:
//         return {
//           ...state,
  
//           displayName: action.displayName,
//           username: action.username,
//           password: action.password
//         };
  
//       default:
//         return state;
//     }
//   }