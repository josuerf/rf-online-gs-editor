import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectGlobal = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectCurrentUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('currentUser'));

const makeSelectIsLoggedIn = () =>
  createSelector(selectGlobal, globalState => globalState.get('isLoggedIn'));

const makeSelectProjectsImports = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('projectsImports'),
  );

export {
  makeSelectLocation,
  makeSelectCurrentUser,
  makeSelectIsLoggedIn,
  makeSelectProjectsImports,
};
