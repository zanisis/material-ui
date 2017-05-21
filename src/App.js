import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'

import './App.css';

import {
  MuiThemeProvider,
} from './MaterialUI'

import injectTapEventPlugin from 'react-tap-event-plugin';
import {PasswordHome, PasswordForm} from './components/Password'

injectTapEventPlugin();

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={PasswordHome}/>
            <Route path='/new' component={PasswordForm} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

