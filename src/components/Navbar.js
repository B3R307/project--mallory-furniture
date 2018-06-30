import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component {
  render(){
    return(
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/terms">Terms + Conditions</Link>
        <Link to="/all-products/:seating">Seating</Link>
        <Link to="/all-products/:tables">Tables</Link>
        <Link to="/all-products/:desks">Desk</Link>
        <Link to="/all-products/:storage">Storag</Link>
        <Link to="/all-products/:bedroom">Bedroom</Link>
        <Link to="/all-products/:miscellaneous">Misc</Link>
      </div>
    );
  }
}

export default Nav;
