import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { createMovie } from '../actions/moviesActions';

const AddMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [yearOfRelease, setYearOfRelease] = useState('');
  const [producer, setProducer] = useState('');
  const [actors, setActor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      name,
      yearOfRelease,
      producer,
      actors,
    };

    dispatch(createMovie(newMovie));
    navigate('/movies');
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <Link to="/movies">
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
        <Form.Group controlId="yearOfRelease">
          <Form.Label>Year of Release</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter year of release"
            value={yearOfRelease}
            onChange={(e) => setYearOfRelease(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="producer">
          <Form.Label>Producer</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Producer Name"
            value={producer}
            onChange={(e) => setProducer(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="actor">
          <Form.Label>Actor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Actor Name"
            value={actors}
            onChange={(e) => setActor(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default AddMovie;
