import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import {  updateProducer } from '../actions/producersActions';

const EditProducer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
   const producer = useSelector((state) => state.producers.find((p) => p._id === id));

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');
 

  useEffect(() => {
    if (producer) {
      setName(producer.name);
      setGender(producer.gender);
      setDob(producer.dob);
      setBio(producer.bio);
    }
  }, [ producer]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProducer = {
      name,
      gender,
      dob,
      bio,
    };

    dispatch(updateProducer(id,updatedProducer));
    navigate('/producers');
  };

  if (!producer) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Producer</h2>
      <Link to="/producers">
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

export default EditProducer;
