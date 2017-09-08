import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UsersGrid from './UsersGrid';

class App extends Component {
  render() {
    const users = [
      {
          "login": "Pedro Lopes",
          "avatar_url": "https://avatars0.githubusercontent.com/u/158610?v=4"
      },
      {
          "login": "claudiopmaia",
          "avatar_url": "https://avatars3.githubusercontent.com/u/190180?v=4"
      }
    ]
    return (
      <UsersGrid
          users={users} />
    )
    // return (
    //   <div className="App">
    //     <div className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h2>Welcome to React</h2>
    //     </div>
    //     <p className="App-intro">
    //       To get started, edit <code>src/App.js</code> and save to reload.
    //     </p>
    //   </div>
    // );
  }
}

export default App;
