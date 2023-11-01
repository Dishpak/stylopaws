import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {useFormInputs} from "../../hooks/useFormInputs";
import {apiUrl} from "../../globalVariables";
import {useDispatch} from "react-redux";
import {loginUser} from "../../store/userSlice";
import {loadCart} from "../../store/cartSlice";


const LoginForm = ({closeModal}) => {
  const [formInputs, handleInputChange] = useFormInputs({});
  const [failedLogMessage, setFailedLogMessage] = useState(false);
  const dispatch = useDispatch();

  const checkUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/users/`);
      const data = await response.json()
      const isUser = data.find(user => user.username === formInputs.username && user.password === formInputs.password);
      if(isUser) {
        setFailedLogMessage(false)
        dispatch(loginUser(isUser))
        dispatch(loadCart(isUser))
        closeModal();
      } else {
        setFailedLogMessage(true);
      }
    }
    catch (error) {
      console.log(error);
    }
  }

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
      </Form.Group>
        {failedLogMessage && <p>Please check your Username & Password</p>}
      <Button type="submit">Log in</Button>
    </Form>
    </>
  );
};

export default LoginForm;
