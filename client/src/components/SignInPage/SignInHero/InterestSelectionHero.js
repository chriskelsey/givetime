

import React from "react";
import Foundation from 'react-foundation';
import InterestSelectionForm from "./../InterestSelectionForm";

import "./SignInHero.css"


// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
const InterestSelectionHero = ({ size, children }) => (
  


<div className="sign-in-hero-full-screen">


   <InterestSelectionForm />
  
  
  

</div>

);



export default InterestSelectionHero;