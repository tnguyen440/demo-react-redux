import React, { Component } from 'react';
//import Header from './components/common/Header';
import Menu from './components/common/Menu';
//import logo from './logo.svg';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import FlatButton from 'material-ui/FlatButton';

import './App.css';

const iconStyles = {
  color: 'white',
};


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar 
            title="Demo App"
            iconElementLeft={<IconButton><Link to="/"><HomeIcon style={iconStyles}/></Link></IconButton>} 
            iconElementRight={<FlatButton label="Add Post" />}
            />
          <div className="body">
            <div style={{ flex: 1, padding:32 }}>{this.props.children}</div>
            <Menu />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
