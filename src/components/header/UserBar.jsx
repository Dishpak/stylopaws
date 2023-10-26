import React from 'react';
import {Button, Image, Badge} from "react-bootstrap";
import {logoutUser} from "../../store/userSlice";
import {useDispatch} from "react-redux";

const Userbar = ({user}) => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutUser())
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
