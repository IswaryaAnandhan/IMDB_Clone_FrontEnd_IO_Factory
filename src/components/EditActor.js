import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import {  updateActor } from '../actions/actorsActions';

const EditActor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const actor = useSelector((state) => state.actors.find((a) => a._id === id));

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');
  
  useEffect(() => {
    if (actor) 
    {
      setName(actor.name);
      setGender(actor.gender);
      setDob(actor.dob);
      setBio(actor.bio);
    }
  }, [actor]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedActor = {
      name,
      gender,
      dob,
      bio,
    };

    dispatch(updateActor(id,updatedActor));
    navigate('/actors');
  };

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Actor</h2>
      <Link to="/actors">
        <Button variant="secondary">Back</Button>
      </Link>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter date of birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="bio">
          <Form.Label>Bio</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditActor;
