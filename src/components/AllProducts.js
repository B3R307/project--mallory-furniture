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

  componentWillMount(){
    this._fetchFurnitureData(this.props)
  }



  _fetchFurnitureData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
    let allProductsInRoute = componentProps.match.params.products
    let seatingProductsInRoute = componentProps.match.params.seating

    if(typeof allProductsInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/all-products`
    }

    if(typeof seatingProductsInRoute !== 'undefined'){
      apiReqUrl = `https://mallory-furniture-admin.now.sh/api/v1/products?category=storage`
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
          {this._renderCards(this.state) }
        </div>
      </div>
    );
  }
}

export default AllProducts
