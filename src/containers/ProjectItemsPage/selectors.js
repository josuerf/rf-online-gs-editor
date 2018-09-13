import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the projectItemsPage state domain
 */

const selectProjectItemsPageDomain = state =>
  state.get('projectItemsPage', initialState);

/**
 * Other specific selectors
 */
const makeSelectProject = () =>
  createSelector(selectProjectItemsPageDomain, substate =>
    substate.get('project'),
  );

const makeSelectResultTotal = () =>
  createSelector(selectProjectItemsPageDomain, substate =>
    substate.getIn(['result', 'total']),
  );

const makeSelectResultItems = () =>
  createSelector(selectProjectItemsPageDomain, substate =>
    substate.getIn(['result', 'items']),
  );

const makeSelectResult = () =>
  createSelector(selectProjectItemsPageDomain, substate =>
    substate.get('result'),
  );

const makeSelectFilter = () =>
  createSelector(selectProjectItemsPageDomain, substate =>
    substate.get('filter'),
  );

/**
 * Default selector used by ProjectItemsPage
 */

const makeSelectProjectItemsPage = () =>
  createSelector(selectProjectItemsPageDomain, substate => substate.toJS());

export default makeSelectProjectItemsPage;
export {
  selectProjectItemsPageDomain,
  makeSelectProject,
  makeSelectResult,
  makeSelectResultTotal,
  makeSelectResultItems,
  makeSelectFilter,
};