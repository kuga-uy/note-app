
import React from 'react';
import './App.css';
import { Header } from './Header';
import { Card } from './Card';
import { notes } from './notes.json';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      notes //same as notes = notes imported
    }
  }


  render() {
    const notes = this.state.notes.map((task, i) => {
      return (
        <Card title={task.title } responsible={task.responsible}
         description={task.description} priority={task.priority}/>
      )
    });
  

  return (
    <div className="gral-container">
         <Header/>
         <div className="task-section">
         { notes }
         </div>
          
    </div>
  )

  }

}

export default App;
