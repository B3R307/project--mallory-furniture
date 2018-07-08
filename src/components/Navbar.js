import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import NanImg from '../images/mf-logo-white.svg'
import LandImg from '../images/landing-splash-bg.png'
import {categoryNameLinks} from "../constants/categoryLinks.js"

class Nav extends Component {
  _generateCategoryLinks(catLinksList){
    return catLinksList.map( categoryNameObj => {
      return <Link to={categoryNameObj.urlName}>{categoryNameObj.fullName}</Link>
    })
  }

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
          {this._generateCategoryLinks(categoryNameLinks)}
          <span className="navbar-vertical-div"/>
          <Link to="#"> <i className="ion-ios-cart-outline"></i> </Link>
        </div>
     </div>

    );
  }
}

export default Nav;
