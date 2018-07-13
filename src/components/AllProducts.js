import React, {Component} from 'react';
import request from 'superagent'
import ProductId from './ProductId.js'
import {categoryNameLinks} from '../constants/categoryLinks.js'


class AllProducts extends Component {
  constructor(args){
    super(args)

    this.state ={
      fitmentDataList : []
    }
  }


  _fetchFurnitureData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'
    let catInRoute = componentProps.match.params.categoryType

    console.log(catInRoute);

    if(typeof catInRoute !== 'undefined'){
      apiReqUrl ='https://mallory-furniture-admin.now.sh/api/v1/products?category=${catInRoute}'
    }


    request
      .get(apiReqUrl)
      .then((serverRes)=>{
        const serverResJson = serverRes.body
        // console.log(serverResJson)

        this.setState({
          fitmentDataList : serverResJson
        })

      })
   }

    componentWillMount(){
     this._fetchFurnitureData(this.props)
    }

    componentWillReceiveProps(newProps){
     this._fetchFurnitureData(newProps)
    }


    _renderCards(fitmentDataList){
      let fornitureComponentList = this.state.fitmentDataList.map((cardObj, i)=>{
        // console.log(fornitureObj)
        return <ProductId
          imgUrl={cardObj.imageLink}
          name={cardObj.item}
          price={cardObj.price}
          furnitureId={cardObj._id}
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

        <div className="fornitureList">
          {this._renderCards(this.state.fitmentDataList)}
        </div>
      </div>
    );
  }
}

export default AllProducts
