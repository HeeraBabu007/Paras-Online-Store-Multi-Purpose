import 'bootstrap/dist/css/bootstrap.min.css';  
import React, { Component, Fragment } from 'react';  
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import image5 from './images/img5.jpg';
import image4 from './images/img4.jpg';
class ProductList extends Component {  

render() {                
return (  
 <Fragment>  
  <Container>
  <h2>Cake and Pastries</h2>
  <p>Looking for delivery less than 3 hours?.</p>
  <p><strong>Note:</strong> There is no facility for less than 3 hours delivery.</p>
  <div class="card-columns">
    <div class="card  bg-warning">
      <div class="card-body text-center">
        <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image5} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>
    <div class="card bg-warning">
      <div class="card-body text-center">
      <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image4} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>
    <div class="card bg-success">
      <div class="card-body text-center">
      <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image5} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>
    <div class="card bg-danger">
      <div class="card-body text-center">
      <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image4} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>  
    <div class="card bg-light">
      <div class="card-body text-center">
      <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image5} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>
    <div class="card bg-info">
      <div class="card-body text-center">
      <p class="card-text">Premium ButterScotch Cake</p>
        <img class="card-img-top" src={image4} alt="Card image"></img>
        <p>TOTAL AMOUNT: ₹450</p>
        <a href="#" class="btn btn-primary">CheckOut</a>
      </div>
    </div>
  </div>
</Container>
        </Fragment> 
      );   
    }   
  }  
  export default ProductList; 