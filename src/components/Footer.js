import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import FootImg from '../images/mf-logo-black.svg'

class Footer extends Component {
  render(){
    return(
        <div className="footer">
          <img src={FootImg}/>
          <div className="company-footer">
            <h3>Company</h3>
              <Link to="/about">About</Link>
              <Link to="/terms">Terms + Conditions</Link>
          </div>

          <div className="categories-footer">
            <h3>Category</h3>
              <Link to="/category/seating">Seating</Link>
              <Link to="/category/tables">Tables</Link>
              <Link to="/category/miscellaneous">Misc</Link>
          </div>

          <div className="social-footer">
             <h3>Social</h3>
              <Link to="#"> <i class="ion-social-instagram-outline"></i> </Link>
              <Link to="#"> <i class="ion-social-twitter-outline"></i> </Link>
              <Link to="#"> <i class="ion-social-pinterest-outline"></i> </Link>
          </div>
        </div>
    );
  }
}

export default Footer
