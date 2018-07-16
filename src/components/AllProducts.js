import React, {Component} from 'react';
import request from 'superagent'
import ProductCard from './ProductCard.js'
import {Link} from 'react-router-dom'
import {categoryNameLinks} from '../constants/categoryLinks.js'


class AllProducts extends Component {
  constructor(args){
    super(args)

    this.state ={
      fitmentDataList : []
    }
  }


  _fetchFurnitureData(componentProps){
    let apiReqUrl=`https://mallory-furniture-admin.now.sh/api/v1/products`
    let catInRoute = componentProps.match.params.categoryType

    // console.log(catInRoute);

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


    _renderCards(fitmentDataList){
      let furnitureComponentList = this.state.fitmentDataList.map((cardObj, i)=>{
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

      if(typeof catInRoute !=='undefined'){
        titleProduct = `${catInRoute[0].toUpperCase()}${catInRoute.slice(1)}`
      }
      if(typeof catInRoute !== 'undefined'){
        lowTitleProduct = `${catInRoute}`
      } else if(typeof catInRoute !== '/all-products'){
        lowTitleProduct ='All available listings'
      }

    return (
      <div className="all-products">
        <div className="dinamyc-title">
          <h2>{titleProduct}</h2>
          <h4> {lowTitleProduct}</h4>
        </div>

        <div className="furniture-display">
          <p><Link className="all-items" to="/all-products">All Items</Link>
          <Link className="on-sale" to="/all-products">On Sale</Link></p>
        </div>
          <div className="furniture-count">
            <p><span className="item-count">{this.state.fitmentDataList.length}</span> Items showing</p>
          </div>

        <div className="furnitureList">
          {this._renderCards(this.state.fitmentDataList)}
        </div>
      </div>
    );
  }
}

export default AllProducts
