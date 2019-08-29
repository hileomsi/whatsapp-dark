import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, ListInput, Button, Block, Preloader } from 'framework7-react';
import { useForm, useField } from 'react-final-form-hooks';

export default function FormRegister(props) {
  const { onRegister, loading, error } = props;
  const { form, handleSubmit, submitting } = useForm({
    onSubmit: onRegister,
    validate: values => {
      const errors = {};
      if(!values.name) errors.password = 'O name é requerido.';
      if(!values.username) errors.username = 'O username é requerido.';
      if(!values.password) errors.password = 'O password é requerido.';

      return errors;
    }
  });
  const name = useField('name', form);
  const username = useField('username', form);
  const password = useField('password', form);

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <List noHairlinesMd>
          <ListInput
            {...name.input}
            label='Name'
            type='text'
            required
            validate
            clearButton
          />
          <ListInput
            {...username.input}
            label='Username'
            type='text'
            required
            validate
            clearButton
          />
          <ListInput
            {...password.input}
            label='Password'
            type='password'
            required
            validate
            clearButton
          />
        </List>
        <Block>
          <Button large outline type="submit" disabled={loading || submitting}>
            {!loading && <span>Register</span>}
            {loading && <Preloader />}
          </Button>
        </Block>
      </form>
      {error && (
        <Block>
          Ocorreu um erro na criação do usuário.
        </Block>
      )}
    </Fragment>
  );
};

FormRegister.defaultProps = {
  error: ''
};

FormRegister.propTypes = {
  onRegister: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};