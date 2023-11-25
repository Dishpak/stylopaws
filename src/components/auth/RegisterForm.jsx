import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { useFormInputs } from '../../hooks/useFormInputs';
import { apiUrl } from '../helpers/globalVariables';
import { registerUser } from '../../store/userSlice';

const RegisterForm = ({ closeModal }) => {
  const [
    input,
    handleInputChange,
    handleInputsReset,
    errorMessage,
    setErrorMessage,
  ] = useFormInputs([]);

  const dispatch = useDispatch();

  const checkUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/users`);
      const data = await response.json();

      const formValidation = () => {
        if (data.find((user) => user.username === input.username)) {
          setErrorMessage('Username is already taken, choose another');
        } else if (input.password !== input.passwordConfirmation) {
          setErrorMessage(`Passwords doesn't match`);
        } else {
          return true;
        }
      };

      if (formValidation()) {
        const uid = Date.now();
        const newUser = {
          id: uid,
          username: input.username,
          password: input.password,
        };

        dispatch(registerUser(newUser));

        fetch(`${apiUrl}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newUser),
        });

        handleInputsReset();
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={checkUser}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={input.username || ''}
            onChange={handleInputChange}
            placeholder="enter your username"
            // required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={input.password || ''}
            onChange={handleInputChange}
            placeholder="enter your password"
            required
          />
          <Form.Label>Repeat Password:</Form.Label>
          <Form.Control
            type="password"
            name="passwordConfirmation"
            value={input.passwordConfirmation || ''}
            onChange={handleInputChange}
            placeholder="enter your password"
            required
          />
        </Form.Group>
        {errorMessage && <p>{errorMessage}</p>}
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default RegisterForm;
