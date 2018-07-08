import React, {Component} from 'react';
import request from 'superagent'
import ProductId from './ProductId.js'
import {categoryNameLinks} from "../constants/categoryLinks.js"
import {Link} from 'react-router-dom'
import HeaderSplash from "./HeaderSplash.js"

class HomePages extends Component {
  constructor(args){
      super(args)

      this.state  = {
          furnitureList: []
      }
  }

  _generateCategoryLinks(catLinksList){
    return catLinksList.map( categoryNameObj => {
      return <Link
        className="btn-cat-link"
        to={categoryNameObj.urlName}>{categoryNameObj.fullName}</Link>
    })
  }

  _fetchFurnitureData(componentProps){
    let apiReqUrl='https://mallory-furniture-admin.now.sh/api/v1/products'



    console.log(apiReqUrl);
    request
      .get(apiReqUrl)
      .then((serverRes)=>{
        const serverResJson = serverRes.body

        console.log("!!!!!")

        console.log(serverResJson)

        this.setState({
            furnitureList: serverResJson
        })
      })
    }

    componentWillMount(){
     this._fetchFurnitureData(this.props)
    }

    componentWillReceiveProps(newProps){

     //this._fetchFurnitureData(newProps)
    }

    _renderFeaturedCards(furnitureDataList){
      let filterFeaturedProductList = furnitureDataList.filter(function(cardObj){
        if(cardObj.featured === true){
          return true
        } else {
          return false
        }

      })

       let featuredComponentList = filterFeaturedProductList.map((cardObj, i)=>{
         return <ProductId
            imgUrl={cardObj.imageLink}
            name={cardObj.item}
            price={cardObj.price}
            key={i}
            />
       })

       let featuredComponentListSliced = featuredComponentList.slice(0,6)

       return featuredComponentListSliced
    }

  render(){

    return (
      <div className="home-pages">
          <HeaderSplash fromPage="homepage">
            <h1>Mallory furniture COOL</h1>
          </HeaderSplash>

          <h2>Featured Products</h2>
          <p>Check out some of our favorite listings</p>


          <div className="fornitureList">
                {this._renderFeaturedCards(this.state.furnitureList) }
          </div>

          <div className="container-cat-btn-links">
                {this._generateCategoryLinks(categoryNameLinks) }
          </div>


       </div>
    );
  }
}

export default HomePages
