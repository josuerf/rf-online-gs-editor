/**
 *
 * ProjectsMediaItems
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import { Item } from 'semantic-ui-react';
// import styled from 'styled-components';

import ProjectsMediaItem from '../ProjectsMediaItem';

function ProjectsMediaItems({ items, total, currentUser }) {
  return (
    <Item.Group divided>
      {items.map(item => (
        <ProjectsMediaItem
          key={item.id}
          total={total}
          item={item}
          currentUser={currentUser}
        />
      ))}
    </Item.Group>
  );
}

ProjectsMediaItems.propTypes = {
  items: PropTypes.array,
  total: PropTypes.number,
  currentUser: PropTypes.instanceOf(Map),
};

ProjectsMediaItems.defaultProps = {
  currentUser: null,
  items: [],
  total: 0,
};

export default ProjectsMediaItems;
