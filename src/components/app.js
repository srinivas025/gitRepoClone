import React, { Component } from 'react';
import '../.././style/style.css';
import Header from './header';
import Profile from './user_profile';
import Repos from './repos';
import SearchRepo from './search_repo';

export default class App extends Component {
  render() {
    return (
      <div className="container">
      <Profile />
      <Header />
      <SearchRepo />
      <Repos />
      </div>
    );
  }
}
