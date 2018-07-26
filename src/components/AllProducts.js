import React, {Component} from 'react';
import request from 'superagent'
import ProductCard from './ProductCard.js'
import {Link} from 'react-router-dom'
import {categoryNameLinks} from '../constants/categoryLinks.js'
import HeaderSplash from './HeaderSplash.js'


class AllProducts extends Component {
  constructor(args){
    super(args)

    this.state ={
      fitmentDataList : [],
      visibleFurnitureType: 'all'
    }
  }

_handleFurnitureTypeClick(clickedType){

   this.setState({
     visibleFurnitureType: clickedType
   })
}

_filterSaleOnlyFurnitureComponents(fitmentDataList){
  let filteredFurnitureList = fitmentDataList.filter(function(furnitureObj){
    if(furnitureObj.onSale === true){
      return true
    } else {
      return false
    }
  })

  return filteredFurnitureList
}

  _fetchFurnitureData(componentProps){
    let apiReqUrl=`https://mallory-furniture-admin.now.sh/api/v1/products`
    let catInRoute = componentProps.match.params.categoryType

    console.log(catInRoute);

    if(typeof catInRoute !== 'undefined'){
      apiReqUrl =`https://mallory-furniture-admin.now.sh/api/v1/products?category=${catInRoute}`
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


  _renderCardsJsxArray(fitmentDataListInState){

      let listOfFurnitureObjects = fitmentDataListInState

      if ( this.state.visibleFurnitureType === "saleOnly")  {
        listOfFurnitureObjects = this._filterSaleOnlyFurnitureComponents(fitmentDataListInState)
      }

      let furnitureComponentList = listOfFurnitureObjects.map((cardObj, i)=>{
        console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")

        return (<ProductCard
          imgUrl={cardObj.imageLink}
          name={cardObj.item}
          price={cardObj.price}
          furnitureId={cardObj._id}
          key={i}
          />)
      })

      return furnitureComponentList
    }

  render(){

    let titleProduct ='All Products'
    let lowTitleProduct ='All Products'

    let catInRoute = this.props.match.params.categoryType
    console.log(catInRoute);

      if(typeof catInRoute !=='undefined'){
        titleProduct = `${catInRoute[0].toUpperCase()}${catInRoute.slice(1)}`
      }
      if(typeof catInRoute !== 'undefined'){
        lowTitleProduct = `${catInRoute}`
      } else if(typeof catInRoute !== '/all-products'){
        lowTitleProduct ='All available listings'
      }


      let AllFurnitureClassVals = 'btn-for-filter' // -btn-filter
      let OnSaleFurnitureClassVals = 'btn-for-filter' // btn-filter

      if(this.state.visibleFurnitureType === "All") AllFurnitureClassVals = `${AllFurnitureClassVals} btn-for-filter--selected`
      if(this.state.visibleFurnitureType === "saleOnly") OnSaleFurnitureClassVals = `${OnSaleFurnitureClassVals} btn-for-filter--selected`


    return (
    <div className="all-products">

      <div className="category-page">
        <HeaderSplash from="bedroom">
        </HeaderSplash>
      </div>


        <div className="dinamyc-title">
          <h2>{titleProduct}</h2>
          <h4> {lowTitleProduct}</h4>
        </div>

      <aside>
        <div className="furniture-display">
          <p><button className={AllFurnitureClassVals} onClick={ ()=>{this._handleFurnitureTypeClick('All') } }>All Items</button>
          <button className={OnSaleFurnitureClassVals} onClick={ ()=>{this._handleFurnitureTypeClick('saleOnly') } }>On Sale</button></p>
        </div>
      </aside>
          <div className="furniture-count">
            <p><span className="item-count">{this.state.fitmentDataList.length}</span> Items showing</p>
          </div>

        <div className="furnitureList">
          {this._renderCardsJsxArray(this.state.fitmentDataList)}
        </div>

      </div>
    );
  }
}

export default AllProducts
