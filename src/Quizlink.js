
import './App.css';

import React, { Component } from "react";
import Nav from "./components/nav.js";

class Quizlink extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
       <div>
         <Nav />
       
       <div className="card m-10 p-5 bg-gray-200 border rounder shadow text-center text-blue-900" >
         <p> Quiz Link Page </p>
       </div>
       </div>
      
    );
  }
}

export default Quizlink;