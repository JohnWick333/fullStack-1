import React,{Component} from 'react';
import {connect} from 'react-redux';
import{ Link } from 'react-router-dom';
import Payment from '../payment';

class Header extends Component{
  renderContent =()=>{
    switch(this.props.auth){
      case null: 
        return;
      case false:
        return<li><a href="/auth/google">Login with google</a></li>;
      default:
        return<div>  
        <li><Payment></Payment></li>
        <li style={{margin:'0 10px'}}>Credits {this.props.auth.credits}</li>
        <li><a href="/api/logout">Logout</a></li></div>
      ;
    }
  }
    render(){
        return(
            <nav>
            <div className="nav-wrapper">
              <Link to={this.props.auth?'/surveys':'/'} className="brand-logo">Logo</Link>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        )
    }
}

const  mapStateToProps =({auth})=>{
  return({auth})
}
export default connect (mapStateToProps)(Header);