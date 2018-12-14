import React, { Component } from 'react';
import Menu from '../components/Menu';
import GroupList from './GroupList';
import PropertyList from './PropertyList';
import { BrowserRouter, Route } from 'react-router-dom'


class Home extends Component {
  render() {
    return (
        <BrowserRouter>        
            
            <div className="wrapper">
                <Menu/>
                <div id="content">
                    <Route path="/groups" component={GroupList} />
                    <Route path="/properties" component={PropertyList} />
                    
                </div>      
            </div>
        </BrowserRouter>      
        );
  }
}

export default Home;
