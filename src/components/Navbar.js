import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NanImg from '../images/mf-logo-white.svg'
import LandImg from '../images/landing-splash-bg.png'
import {categoryNameLinks} from "../constants/categoryLinks.js"

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
            <Link to='/all-products'>All</Link>
            <Link to='/category/seating'>Seating</Link>
            <Link to='/category/bedroom'>Bedroom</Link>
            <Link to='/category/tables'>Tables</Link>
            <Link to='/category/storages'>Storage</Link>
            <Link to='/category/desks'>Desks</Link>
          <span className="navbar-vertical-div"/>
          <Link to="#"> <i className="ion-ios-cart-outline"></i> </Link>
        </div>
     </div>

    );
  }
}

export default Nav;
