import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'framework7-react';
import { Col } from './styles';

export default function AvatarsList(props) {
  const { avatars, onSelectAvatar } = props;

  return (
    <Row>
      {avatars.map((avatar, index) => (
        <Col width='33' key={index} onClick={() => onSelectAvatar(avatar)}>
          <img src={avatar.img} alt={avatar.name} />
        </Col>
      ))}
    </Row>
  );
}

AvatarsList.propTypes = {
  avatars: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onSelectAvatar: PropTypes.func.isRequired
};

