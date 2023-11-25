import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useFormInputs } from '../../hooks/useFormInputs';
import { editUser } from '../../store/userSlice';
import { apiUrl } from '../helpers/globalVariables';
import axios from 'axios';
import BootstrapModal from '../helpers/BootstrapModal';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [inEdit, setInEdit] = useState(false);
  const [input, handleInputChange, handleInputsReset] = useFormInputs(user);
  const [showModal, setShowModal] = useState(false);

  const saveChanges = (e) => {
    e.preventDefault();
    axios
      .patch(`${apiUrl}/users/${user.id}`, {
        ...user,
        name: input.name,
        email: input.email,
        phoneNumber: input.phoneNumber,
        avatar: input.avatar,
      })
      .then(dispatch(editUser(input)));
    setInEdit(false);
    setShowModal(false);
  };

  const cancelEditing = () => {
    handleInputsReset();
    setInEdit(false);
  };

  return (
    <div className={'profile container'}>
      <h1>Profile Page</h1>
      <Row>
        <Col className="avatar-container">
          <img src={user.avatar} alt="" />
          <div className="edit-avatar" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-pen-to-square"></i>
          </div>
        </Col>
        <Col>
          <h3>{user.username}</h3>
          <Form>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type={'text'}
                name={'name'}
                value={input.name || ''}
                onChange={handleInputChange}
                disabled={!inEdit}
              />{' '}
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={input.email || ''}
                onChange={handleInputChange}
                disabled={!inEdit}
              />
              <Form.Label>Phone number:</Form.Label>
              <Form.Control
                type="phone"
                name="phoneNumber"
                value={input.phoneNumber || ''}
                onChange={handleInputChange}
                disabled={!inEdit}
              />
            </Form.Group>
            {!inEdit ? (
              <Button onClick={() => setInEdit(!inEdit)}>
                Edit <i className="fa-solid fa-pen-to-square"></i>
              </Button>
            ) : (
              <>
                <Button onClick={saveChanges}>Save</Button>
                <Button onClick={cancelEditing}>Cancel</Button>
              </>
            )}
          </Form>
        </Col>
      </Row>
      <BootstrapModal title="Paste URL" show={showModal} setShow={setShowModal}>
        <Form>
          <Form.Control
            type="url"
            name="avatar"
            value={input.avatar || ''}
            onChange={handleInputChange}
            placeholder="https://example.com"
          />
          <Button onClick={saveChanges}>Save</Button>
        </Form>
      </BootstrapModal>
    </div>
  );
};

export default Profile;
