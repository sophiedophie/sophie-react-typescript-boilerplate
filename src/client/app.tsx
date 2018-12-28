import React from 'react';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1 className='app-header-title'>
          Welcome to React Boilerplate App~
        </h1>
        <p className='app-header-content'>Made by <a href='https://github.com/sophiedophie'>sophiedophie</a></p>
      </div>
    )
  }
}