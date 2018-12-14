import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component{
    render() {
        return (
            <nav id="sidebar">
            <div className="sidebar-header">
                <h3>POC - CM</h3>
            </div>

            <ul className="list-unstyled components">   
                <li>                    
                    <Link to="/">Home</Link>
                </li>         
                <li>                    
                    <Link to="/groups">Grupos</Link>
                </li>
                <li>                    
                    <Link to="/properties">Propriedade</Link>
                </li>                
                
            </ul>
          
        </nav>
        );
    }    
}

export default Menu;