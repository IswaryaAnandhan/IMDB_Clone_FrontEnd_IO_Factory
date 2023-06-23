import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { deleteActor, getAllActors } from '../actions/actorsActions';

const ActorList = () => {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actors);

  useEffect(() => {
    dispatch(getAllActors());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this actor?')) {
      dispatch(deleteActor(id));
    }
  };

  return (
    <div>
      <h2>Actors</h2>
      <Link to="/actors/add">
        <Button variant="primary">Add Actor</Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>DOB</th>
            <th>Bio</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {actors.map((actor) => (
            <tr key={actor._id}>
              <td>{actor.name}</td>
              <td>{actor.gender}</td>
              <td>{actor.dob}</td>
              <td>{actor.bio}</td>
              <td>
                <Link to={`/actors/edit/${actor._id}`}>
                  <Button variant="info" size="sm" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(actor._id)}>
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

export default ActorList;
