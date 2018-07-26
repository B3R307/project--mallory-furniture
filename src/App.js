import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css'


import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import HomePage from './components/HomePage.js'
import About from './components/About.js'
import Terms from './components/Terms.js'
import AllProducts from './components/AllProducts.js'
import ProductCard from './components/ProductCard.js'
import HeaderSplash from './components/HeaderSplash.js'
import ProductSingle from './components/ProductSingle.js'


class App extends Component {
  render() {
    console.log("=================");
    console.log(this.props);
    return (
      <div id="app-container">
        <Navbar/>

            <Switch>
                <Route exact path="/category/:categoryType" component={AllProducts}/>
                <Route exact path="/product/:productId" component={ProductSingle}/>
                <Route exact path="/all-products" component={AllProducts}/>
                <Route exact path="/terms" component={Terms}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/" component={HomePage}/>
            </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
