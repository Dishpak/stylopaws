import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Image, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../store/userSlice';
import { dropCart } from '../../store/cartSlice';

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
        <Dropdown.Item as={Link} to={'/profile'}>
          Profile
        </Dropdown.Item>
        <Dropdown.Item>Featured</Dropdown.Item>
        <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Userbar;
