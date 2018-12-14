import React, { Component } from 'react';

class Header extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">                    
                    <h2>{this.props.label}</h2>                      
                </div>
            </nav>
        );
    }
    
}

export default Header;