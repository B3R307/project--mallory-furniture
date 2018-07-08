import React, {Component} from 'react';
import request from 'superagent'
import ProductId from './ProductId.js'

class AllProducts extends Component {
  constructor(args){
    super(args)

    this.state ={
      fitmentDataList : []
    }
  }


  _fetchFurnitureData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'

    if(typeof allProductsInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof featuredProductsInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products?category=featured`
    }

    console.log(apiReqUrl);
    request
      .get(apiReqUrl)
      .then((serverRes)=>{
        const serverResJson = serverRes.body
        console.log(serverResJson)

        this.setState({
          fitmentDataList : serverResJson
        })

      })
   }

    componentWillMount(){
     this._fetchFurnitureData(this.props)
    }

    componentWillReceiveProps(newProps){
    // this._fetchFurnitureData(newProps)
    }


    _renderCards(fitmentDataList){
      let fornitureComponentList = this.state.fitmentDataList.map((cardObj, i)=>{
        // console.log(fornitureObj)
        return <ProductId
          imgUrl={cardObj.imageLink}
          name={cardObj.item}
          price={cardObj.price}
          key={i}
          />
      })

      return fornitureComponentList
    }

  render(){

    return (
      <div className="all-products">
        <h2>All Products</h2>
        <h4>All available listings</h4>

        <h3>in route: <code>{this.props.match.url}</code></h3>

        <div className="fornitureList">
          {this._renderCards(this.state.fitmentDataList)}
        </div>
      </div>
    );
  }
}

export default AllProducts
