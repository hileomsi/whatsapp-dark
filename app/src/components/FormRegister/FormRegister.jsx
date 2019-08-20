import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, ListInput, Button, Block } from 'framework7-react';

export default function FormRegister(props) {
  const { onRegister } = props;

  return (
    <Fragment>
      <List noHairlinesMd>
        <ListInput
          label='Name'
          type='text'
          required
          validate
          clearButton
        />
        <ListInput
          label='Username'
          type='text'
          required
          validate
          clearButton
        />
        <ListInput
          label='Password'
          type='password'
          required
          validate
          clearButton
        />
      </List>
      <Block>
        <Button large outline onClick={onRegister}>Register</Button>
      </Block>
    </Fragment>
  );
};

FormRegister.propTypes = {
  onRegister: PropTypes.func.isRequired
};