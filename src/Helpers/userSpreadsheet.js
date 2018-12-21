import config from "../Constants/config.js";
/**
 * Load the users from the spreadsheet
 * Get the right values from it and assign.
 */
export default function loadUser(callback) {
  window.gapi.client.loadUser("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Users!A2:B"
      })
      .then(
        response => {
          const data = response.result.values;
          const user =
            data.map(user => ({
              username: user[0],
              password: user[1]
            })) || [];
          callback({
            user
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
