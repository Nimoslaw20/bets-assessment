const createSelector = (suffix) => `[data-test="${suffix}"]`;

module.exports = {
  usernameField: createSelector('username'),
  passwordField: createSelector('password'),
  loginButton: createSelector('login-button'),
  errorMessageText: 'Epic sadface: Username and password do not match any user in this service',
};
