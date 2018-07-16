import React, {Component} from 'react';
import {Link} from "react-router-dom"




class ProductCard extends Component {

      render(){

      return(
        <div className="product-id">
          <Link to={`/product/${this.props.furnitureId}`}>
            <img className="img-id" src={this.props.imgUrl}/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>
            </div>
          </Link>
       </div>
    );
  }
}

export default ProductCard
