import React, { Component } from 'react';

class HeaderSplash extends Component {

  render(){
    let classNameVal= "el--hidden"

    if(this.props.fromPage === "homepage") classNameVal = "img-landing"

    return(
      <div className={classNameVal}>
        {this.props.children}
      </div>

    );
  }
}

export default HeaderSplash;
