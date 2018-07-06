import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NanImg from '../images/mf-logo-white.svg'



class Nav extends Component {
  render(){
    return(
      <div className="navbar">
        <div className="static-navbar" >
          <Link to="/"> <img src={NanImg}/></Link>
          <Link to="/about">About</Link>
          <Link to="/terms">Terms + Conditions</Link>
        </div>
        <div className="dinamic-navbar">
          <span className="navbar-vertical-div"/>
          <Link to="/category/seating">Seating</Link>
          <Link to="/category/tables">Tables</Link>
          <Link to="/category/desks">Desk</Link>
          <Link to="/category/storage">Storag</Link>
          <Link to="/category/bedroom">Bedroom</Link>
          <Link to="/category/miscellaneous">Misc</Link>
          <span className="navbar-vertical-div"/>
          <Link to="#"> <i className="ion-ios-cart-outline"></i> </Link>
        </div>
     </div>

    );
  }
}

export default Nav;
