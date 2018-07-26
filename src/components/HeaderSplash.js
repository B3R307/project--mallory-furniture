import React, { Component } from 'react';


class HeaderSplash extends Component {

  render(){
    let classNameVal= "el--hidden"
    let catInRoute = this.props
    console.log('---------->>>', window.location.pathname)
    let catImg = window.location.pathname


    if(this.props.fromPage === "homepage") classNameVal = "img-landing"
    if(catImg === "/category/bedroom") classNameVal = "img-bedroom"
    if(catImg === "/category/desks") classNameVal = "img-desks"
    if(catImg === "/category/miscellaneous") classNameVal = "img-miscellaneous"
    if(catImg === "/category/seating") classNameVal = "img-seating"
    if(catImg === "/category/storage") classNameVal = "img-storage"
    if(catImg === "/category/tables") classNameVal = "img-tables"





    return(
      <div className={classNameVal}>
        {this.props.children}
      </div>

    );
  }
}

export default HeaderSplash;
