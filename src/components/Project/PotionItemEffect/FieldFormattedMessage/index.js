/**
 *
 * ProjectPotionItemEffectFieldFormattedMessage
 *
 */

import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import React from 'react';

import messages from '../messages';

/* eslint-disable react/prefer-stateless-function */
class ProjectPotionItemEffectFieldFormattedMessage extends React.PureComponent {
  render() {
    const { message, children } = this.props;

    if (!messages[message]) {
      if (typeof children === 'function') {
        return children(message);
      }

      return message;
    }

    return (
      <FormattedMessage {...messages[message]}>{children}</FormattedMessage>
    );
  }
}

ProjectPotionItemEffectFieldFormattedMessage.propTypes = {
  message: PropTypes.string.isRequired,
  children: PropTypes.func,
};

export default ProjectPotionItemEffectFieldFormattedMessage;
