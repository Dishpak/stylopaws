import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';

import { useFormInputs } from '../../hooks/useFormInputs';
import { apiUrl } from '../helpers/globalVariables';
import { loginUser } from '../../store/userSlice';

const RegisterForm = ({ closeModal }) => {
  const [formInputs, handleInputChange, handleInputsReset] = useFormInputs({
    username: '',
    password: '',
  });
  const [failedLogMessage, setFailedLogMessage] = useState(false);
  const dispatch = useDispatch();

  const checkUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/users/`);
      const data = await response.json();

      const isUser = data.find(
        (user) =>
          user.username === formInputs.username &&
          user.password === formInputs.password,
      );
      if (isUser) {
        setFailedLogMessage(false);
        dispatch(loginUser(isUser));
        handleInputsReset();
      } else {
        setFailedLogMessage(true);
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
            value={formInputs.username || ''}
            onChange={handleInputChange}
            placeholder="enter your username"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formInputs.password || ''}
            onChange={handleInputChange}
            placeholder="enter your password"
            required
          />
          <Form.Label>Repeat Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formInputs.password || ''}
            onChange={handleInputChange}
            placeholder="enter your password"
            required
          />
        </Form.Group>
        {failedLogMessage && <p>Please check your Username & Password</p>}
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};

export default RegisterForm;
