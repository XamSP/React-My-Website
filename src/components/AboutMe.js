import React, { Component } from 'react';
//import axios from 'axios';
import { Link } from 'react-router-dom';

class AboutMe extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

//   componentDidMount(){
//   }
  
  render(){
    return(
      <div>
        <h1>About Me</h1>
        <p>Lorem ipsu...</p>
        <div >
          <img src="lol" />
        </div>
        <Link to={'/'}>Back to projects</Link>
      </div>
    )
  }
}  

export default AboutMe;