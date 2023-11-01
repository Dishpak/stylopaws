import React from 'react';
import {Button, Image, Badge} from "react-bootstrap";
import {logoutUser} from "../../store/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {dropCart} from "../../store/cartSlice";
import {useNavigate} from "react-router-dom";

const Userbar = ({user}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart)

  const logOut = () => {
    dispatch(logoutUser(cart))
    dispatch(dropCart())
    navigate("/")
  }

  return (
    <div className="userbar">
      <Image src={user.avatar} className="user-avatar" fluid roundedCircle/>
      <Badge pill>></Badge>
      <Button onClick={logOut}>Logout</Button>
    </div>
  );
};

export default Userbar;
