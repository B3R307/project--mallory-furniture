import React, {Component} from 'react';
import request from 'superagent';



class ProductSingle extends Component {
  constructor(args){
    super(args)

    this.state = {
      productDataList : {}
    }
  }


  _fetchProductData(componentProps){
    let singleRoute = this.props.match.params.productId

    // console.log(catInRoute);

    let apiReqUrl =`https://mallory-furniture-admin.now.sh/api/v1/products/${singleRoute}`


    request
      .get(apiReqUrl)
      .then((serverRes)=>{
        const serverResJson = serverRes.body
        // console.log(serverResJson)

        this.setState({
          productDataList : serverResJson
        })

      })
   }

  componentWillMount(){
   this._fetchProductData(this.props)
  }

  componentWillReceiveProps(newProps){
   this._fetchProductData(newProps)
  }

  render(){
      console.log("---------------");

      console.log(this.props.match.params.furnitureId);
      console.log("---------------");
    console.log(this.state);
    if(typeof this.state.productDataList.imageLink === "undefined" ){
      return <div> loading... </div>
    }
    return(
        <div className="product-container">
          <div className="img">
            <img src={this.state.productDataList.imageLink}/>
          </div>
          <div className="info-container">
            <div className="text-info">
              <h3>{this.state.productDataList.item}</h3>
              <span className="price">$ {this.state.productDataList.price}</span>
            </div>
              <div className="product-info">
                <div className="condition">
                  <h4>Condition</h4>
                  <p>{this.state.productDataList.condition}</p>
                </div>
                  <div className="measurements">
                    <h4>Measurements</h4>
                    <p>W:{this.state.productDataList.width}</p>
                    <p>L:{this.state.productDataList.length}</p>
                    <p>H:{this.state.productDataList.height}</p>
                  </div>
                    <button>Add to Cart</button>
                </div>
             </div>
        </div>

    )
  }
}
export default ProductSingle
