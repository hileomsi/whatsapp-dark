import React, { Fragment } from 'react';
import { List, ListInput, Button, Block } from 'framework7-react';

export default function FormLogin() {
  return (
    <Fragment>
      <List noHairlinesMd>
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
        <Button large outline>Login</Button>
      </Block>
    </Fragment>
  );
};