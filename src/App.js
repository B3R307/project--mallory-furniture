import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'

import HomePage from './components/HomePage.js'
import About from './components/About.js'
import Terms from './components/Terms.js'
import AllProducts from './components/AllProducts.js'
import ProductId from './components/ProductId.js'




class App extends Component {
  render() {
    return (
      <div id="app-container">
        <Navbar/>
        {        }
            <Switch>
                <Route exact path="/category/:category-type" component={AllProducts}/>
                
                <Route exact path="/product/:product-id" component={ProductId}/>
                <Route exact path="/all-products" component={AllProducts}/>
                <Route exact path="/terms" component={Terms}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        <Footer/>
        {  }
      </div>
    );
  }
}

export default App;
