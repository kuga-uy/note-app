
import React from 'react';
import './App.css';
import { Header } from './Header';
import { Card } from './Card';
import { notes } from './notes.json';
import { NotesForm } from './NotesForm';

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
    <>
    <Header tasksCounter={this.state.notes.length}/>
    <div className="gral-container">
      <div className="form-section">
            <NotesForm/>
      </div>
      <div className="task-section">
         { notes }
      </div>
         
    </div>
    
    </>
  )

  }

}

export default App;
