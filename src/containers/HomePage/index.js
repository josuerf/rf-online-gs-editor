/**
 *
 * HomePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from '../../utils/injectSaga';
import injectReducer from '../../utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';
import { makeSelectIsLoggedIn, makeSelectCurrentUser } from '../App/selectors';
import { logoutCurrentUser } from '../App/actions';
import { makeSelectProject } from '../ProjectPage/selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  render() {
    const {
      isLoggedIn,
      currentUser,
      currentProject,
      fnLogoutCurrentUser,
    } = this.props;

    return (
      <div>
        <Helmet>
          <title>HomePage</title>
          <meta name="description" content="Description of HomePage" />
        </Helmet>

        <Header
          onClickLogout={fnLogoutCurrentUser}
          currentUser={currentUser}
          currentProject={currentProject}
          isLoggedIn={isLoggedIn}
        />
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  currentUser: PropTypes.instanceOf(Map),
  currentProject: PropTypes.instanceOf(Map),
};

HomePage.defaultProps = {
  currentUser: null,
  currentProject: null,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  isLoggedIn: makeSelectIsLoggedIn(),
  currentUser: makeSelectCurrentUser(),
  currentProject: makeSelectProject(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fnLogoutCurrentUser: () => dispatch(logoutCurrentUser()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
