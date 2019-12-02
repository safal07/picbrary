import React, { Component } from 'react';
import './styles/App.css';
import {Switch , Route} from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ImageView from './components/ImageView';
import store from './store';
import {Provider} from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin : localStorage.getItem('splitterUser') === "" ? false : true,
      currentUser: localStorage.getItem('splitterUser')
    }
  }

  componentDidMount(){
    if(!localStorage.getItem('splitterUser'))
      localStorage.setItem('splitterUser', null);

    if(!localStorage.getItem('currentLedger'))
      localStorage.setItem('currentLedger', null);
  }

  render() {
    return (
      <Provider store = {store}>
          <Switch>
              <Route exact path = '/' component={Home} />
              <Route path='/login' component={UserLogin} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/imageview" component={ImageView} />
            </Switch>
      </Provider>
    );
  }
}

export default App;
