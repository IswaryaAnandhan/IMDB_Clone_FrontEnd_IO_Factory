import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { deleteProducer, getAllProducers } from '../actions/producersActions';

const ProducerList = () => {
  const dispatch = useDispatch();
  const producers = useSelector((state) => state.producers);

  useEffect(() => {
    dispatch(getAllProducers());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this producer?')) {
      dispatch(deleteProducer(id));
    }
  };

  return (
    <div>
      <h2>Producers</h2>
      <Link to="/producers/add">
        <Button variant="primary">Add Producer</Button>
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
          {producers.map((producer) => (
            <tr key={producer._id}>
              <td>{producer.name}</td>
              <td>{producer.gender}</td>
              <td>{producer.dob}</td>
              <td>{producer.bio}</td>
              <td>
                <Link to={`/producers/edit/${producer._id}`}>
                  <Button variant="info" size="sm" className="me-2">
                    Edit
                  </Button>
                </Link>
                <Button variant="danger" size="sm" onClick={() => handleDelete(producer._id)}>
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

export default ProducerList;
