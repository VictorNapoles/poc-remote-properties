import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";

import Header from '../components/Header';
import actions from '../actions/propertyAction'

class PropertyList extends Component {
  render() {   
    return (      
        <div>
          <Header label="Propriedade"/>
          <div className="row">
            <button onClick={(e) => {this.props.getProperty(1)}}>Teste</button>
            <label>Property: {this.props.entity ? this.props.entity.name : '-'}</label>
          </div>
                        
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    entity :  state.property,
    entities : state.properties  
  }  
  
}

const mapDispatchToProps = (dispatch) => bindActionCreators({...actions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);
