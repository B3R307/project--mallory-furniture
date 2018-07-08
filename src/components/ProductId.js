import React, {Component} from 'react';

class ProductId extends Component {
    render(){
      return(
        <div className="product-id">
          <img src={this.props.imgUrl}/>
            <div className="product-text">
              <h3>{this.props.name}</h3>
              <p>${this.props.price}</p>
            </div>
        </div>
    );
  }
}

export default ProductId
