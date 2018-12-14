import React, { Component } from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import rootMiddleware from './middlewares'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(...rootMiddleware))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>        
            <Switch>
                <Route path="/" exact={true} component={Home}/>          
            </Switch>
        </ BrowserRouter>
      </Provider>
    );
  }
}

export default App;
