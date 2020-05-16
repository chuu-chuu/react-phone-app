import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container, Row, Col} from 'react-bootstrap';

import './App.css';



import Navigation from './components/Nav';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Cart from './components/Cart';
import Modal from './components/Modal';

import { Switch, Route} from "react-router-dom";


function App() {
  return (
    
    <div>
      
      <Navigation></Navigation>
      
        <Switch>
          <Route path="/" exact><ProductList /></Route>
          <Route path="/details"><Details /></Route>
          <Route path="/cart"><Cart /></Route>
          <Route ><Default /></Route>
        </Switch>
        <Modal />
      
    </div>
    
      
    
  );
}

export default App;
