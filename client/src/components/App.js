import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../actions'
import Header from './header/Header'
import landing from './landig'


class APP extends Component{
    componentDidMount () {
      console.log( this.props.fetchUser());
    }
    render(){
        return (
            <div className='container'>
            <BrowserRouter>
                <Header/>
                <Route path = '/' component={landing}></Route>
            </BrowserRouter>
            </div>
        )
    }
}

export default connect(null,actions)(APP);