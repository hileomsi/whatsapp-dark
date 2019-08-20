import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Block, BlockTitle } from 'framework7-react';

export default function BlockError(props) {
  const { title, message } = props;
  return (
    <Fragment>
      <BlockTitle>{title}</BlockTitle>
      <Block strong>{message}</Block>
    </Fragment>
  );
}

BlockError.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

