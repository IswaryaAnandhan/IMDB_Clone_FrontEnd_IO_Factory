// EditMovie.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { updateMovie } from '../actions/moviesActions';

const EditMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const movie = useSelector((state) => state.movies.find((m) => m._id === id));

  const [name, setName] = useState('');
  const [yearOfRelease, setYearOfRelease] = useState('');
  const [producer, setProducer] = useState('');
  const [actors, setActor] = useState('');

  useEffect(() => {
    if (movie) {
      setName(movie.name);
      setYearOfRelease(movie.yearOfRelease);
      setProducer(movie.producer);
      setActor(movie.actors);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedMovie = {
      name,
      yearOfRelease,
      producer,
      actors,
    };

    dispatch(updateMovie(id, updatedMovie));
    navigate('/movies');
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Edit Movie</h2>
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditMovie;
