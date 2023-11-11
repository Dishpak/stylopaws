import React from 'react';
import { Button, Image, Badge, Dropdown } from 'react-bootstrap';
import { logoutUser } from '../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { dropCart } from '../../store/cartSlice';
import { useNavigate } from 'react-router-dom';

const Userbar = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const logOut = () => {
    dispatch(logoutUser(cart));
    dispatch(dropCart());
    navigate('/');
  };

  return (
    <Dropdown className="userbar">
      <Image src={user.avatar} className="user-avatar" fluid roundedCircle />
      <Dropdown.Toggle
        as={'a'}
        id={'dropdown-button-drop-end'}
      ></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <p onClick={logOut}>Logout</p>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Userbar;
