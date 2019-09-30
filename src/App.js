/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Details from './Components/Details'
import Cart from './Components/cart/Cart'
import Default from './Components/Default';
import Modal from './Components/Modal'
function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal></Modal>
    </React.Fragment>
    
  );
}

export default App;
