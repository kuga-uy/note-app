import React from 'react';
import './App.css';

class Header extends React.Component{
  render() {
    return (
      <>
       <header className="header">
           <h3 className="header--title">Note App</h3>
       </header>
      </>
      );
  }

}

export { Header };