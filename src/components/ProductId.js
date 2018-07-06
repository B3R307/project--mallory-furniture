import React, {Component} from 'react';

class ProductId extends Component {
    render(){
      return(
        <div className="product-id">
          <img src={this.props.imgUrl}/>
          <h3>{this.props.name}</h3>
          <p>{this.props.price}</p>
        </div>
    );
  }
}

export default ProductId
