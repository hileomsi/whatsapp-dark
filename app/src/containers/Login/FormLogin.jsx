import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, ListInput, Button, Block, Preloader } from 'framework7-react';
import { useForm, useField } from 'react-final-form-hooks';

export default function FormLogin(props) {
  const { onLogin, loading } = props;
  const { form, handleSubmit, submitting } = useForm({
    onSubmit: onLogin,
    validate: values => {
      const errors = {};
      if(!values.username) errors.username = 'O username é requerido.';
      if(!values.password) errors.password = 'O password é requerido.';

      return errors;
    }
  });
  const username = useField('username', form);
  const password = useField('password', form);

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <List noHairlinesMd>
          <ListInput
            {...username.input}
            label='Username'
            type='text'
            required
            validate
            clearButton
            errorMessage={username.meta.touched && username.meta.error}
          />
          <ListInput
            {...password.input}
            label='Password'
            type='password'
            required
            validate
            clearButton
            errorMessage={password.meta.touched && password.meta.error}
          />
        </List>
        <Block>
          <Button large outline type="submit" disabled={submitting || loading}>
            {!loading && <span>Login</span>}
            {loading && <Preloader />}
          </Button>
        </Block>
      </form>
    </Fragment>
  );
};

FormLogin.defaultProps = {
  error: ''
};

FormLogin.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLogin: PropTypes.func.isRequired
};