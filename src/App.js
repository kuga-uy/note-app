
import React from 'react';
import './App.css';
import { Header } from './Header';
import { notes } from './notes.json';
import { NotesForm } from './NotesForm';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      notes //same as notes = notes imported
    }
    this.addNotes = this.addNotes.bind(this);
    
  }

  addNotes(note) {
    console.log(this.state)
    this.setState({
        notes: [...this.state.notes, note] /*join the new elements from the form with the
        actual state*/
    })

  
}

deleteCard(index){
  console.log(index)
  this.setState({
      notes: this.state.notes.filter((e,i) => {
          console.log(e)
          return i !== index;
      })
  })
}


  render() {
    const notes = this.state.notes.map((task, i) => {
      return (
        <>
               
        <div className="card">
            <span className="title">{this.props.title}</span>
            <span className="responsible">Responsible: {task.responsible}</span>
            <span className="description">Description: {task.description}</span>
            <span className="priority">Priority: {task.priority}</span>
            <button onClick={this.deleteCard.bind(this, i)} className="deleteButton">x</button>
        </div>
        </>
        
    )

  })
  

  return (
    <>
    <Header tasksCounter={this.state.notes.length}/>
    <div className="gral-container">
      <div className="form-section">
            <NotesForm addNote={this.addNotes} />
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
