import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createMovie, updateMovie } from '../actions/moviesActions';

const MovieForm = ({ movieToEdit }) => {
  const [name, setName] = useState('');
  const [yearOfRelease, setYearOfRelease] = useState('');
  const [producer, setProducer] = useState('');
  const [actors, setActors] = useState([]);

  const dispatch = useDispatch();
  const producers = useSelector((state) => state.producers);
  const allActors = useSelector((state) => state.actors);

  useEffect(() => {
    if (movieToEdit) {
      setName(movieToEdit.name);
      setYearOfRelease(movieToEdit.yearOfRelease);
      setProducer(movieToEdit.producer);
      setActors(movieToEdit.actors);
    }
  }, [movieToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movieData = {
      name,
      yearOfRelease,
      producer,
      actors,
    };
    if (movieToEdit) {
      dispatch(updateMovie(movieToEdit._id, movieData));
    } else {
      dispatch(createMovie(movieData));
    }
    // Reset form fields
    setName('');
    setYearOfRelease('');
    setProducer('');
    setActors([]);
  };

  return (
    <div className="card my-4">
      <div className="card-body">
        <h2 className="card-title">{movieToEdit ? 'Edit Movie' : 'Add Movie'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="yearOfRelease" className="form-label">Year of Release:</label>
            <input type="number" id="yearOfRelease" className="form-control" value={yearOfRelease} onChange={(e) => setYearOfRelease(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="producer" className="form-label">Producer:</label>
            <select id="producer" className="form-control" value={producer} onChange={(e) => setProducer(e.target.value)} required>
              <option value="">Select Producer</option>
              {producers.map((producer,i) => (
                <option key={i} value={i}>
                  {producer.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="actors" className="form-label">Actors:</label>
            <select
              id="actors"
              multiple
              className="form-control"
              value={actors}
              onChange={(e) => setActors(Array.from(e.target.selectedOptions, (option) => option.value))}
              required
            >
              {allActors.map((actor,i) => (
                <option key={i} value={i}>
                  {actor.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">{movieToEdit ? 'Update' : 'Add'}</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
