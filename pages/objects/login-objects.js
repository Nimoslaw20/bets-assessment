const createSelector = (suffix) => `[data-test="${suffix}"]`;

const createPlaceholderSelector = (suffix) => `[placeholder="${suffix}"]`;


module.exports = {
  usernameField: createSelector('username'),
  passwordField: createSelector('password'),
  loginButton: createSelector('login-button'),
  loginContainer: createSelector('login-container'),
  form:'form',
  userNamePlaceHolder: createPlaceholderSelector('Username'),
  passwordPlaceHolder: createPlaceholderSelector('Password'),

};
