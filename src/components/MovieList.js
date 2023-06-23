import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { deleteMovie, getAllMovies } from '../actions/moviesActions';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
    }
  };

  return (
    <div>
      <h2>Movies</h2>
      <Link to="/movies/add">
        <Button variant="primary">Add Movie</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year of Release</th>
            <th>Producer</th>
            <th>Actors</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.name}</td>
              <td>{movie.yearOfRelease}</td>
              <td>{movie.producer}</td>
              <td>
                {movie.actors.map((actor,i) => (
                  <span key={i}>{actor} </span>
                ))}
              </td>
              <td>
                <Link to={`/movies/edit/${movie._id}`}>
                  <Button variant="info" size="sm" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(movie._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MovieList;
