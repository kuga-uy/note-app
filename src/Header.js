import React from 'react';
import './App.css';

class Header extends React.Component{
  render() {
    return (
      <>
       <header className="header">
           <h3 className="header--title">Tasks:</h3>
           <span className="tasks-counter">{this.props.tasksCounter}</span>
       </header>
      </>
      );
  }

}

export { Header };