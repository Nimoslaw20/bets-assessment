const createSelector = (suffix) => `[data-test="${suffix}"]`;

module.exports = {
  menuButton: 'Open Menu',
  logoutLink: createSelector('logout-sidebar-link'),
  button: 'button',
};
