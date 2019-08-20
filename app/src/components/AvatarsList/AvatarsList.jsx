import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'framework7-react';

export default function AvatarsList(props) {
  const { avatars } = props;

  return (
    <Row>
      {avatars.map((avatar, index) => (
        <Col width='33' key={index}>
          <img src={avatar} alt={avatar} />
        </Col>
      ))}
    </Row>
  );
}

AvatarsList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

