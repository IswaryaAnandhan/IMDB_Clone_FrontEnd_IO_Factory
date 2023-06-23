import React from "react";

import {  Nav, Navbar } from "react-bootstrap";
import MovieList from "./components/MovieList";
import ActorList from "./components/ActorList";
import ProducerList from "./components/ProducerList";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import AddActor from "./components/AddActor";
import EditActor from "./components/EditActor";
import AddProducer from "./components/AddProducer";
import EditProducer from "./components/EditProducer";
import { Route, Routes, Link} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          IMDB Clone
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/movies">
            Movies
          </Nav.Link>
          <Nav.Link as={Link} to="/actors">
            Actors
          </Nav.Link>
          <Nav.Link as={Link} to="/producers">
            Producers
          </Nav.Link>
        </Nav>
      </Navbar>


        <Routes>
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/add" element={<AddMovie />} />
          <Route path="/movies/edit/:id" element={<EditMovie />} />
          <Route path="/actors" element={<ActorList />} />
          <Route path="/actors/add" element={<AddActor />} />
          <Route path="/actors/edit/:id" element={<EditActor />} />
          <Route path="/producers" element={<ProducerList />} />
          <Route path="/producers/add" element={<AddProducer />} />
          <Route path="/producers/edit/:id" element={<EditProducer />} />
        </Routes>
    
    </div>
  );
};

export default App;
