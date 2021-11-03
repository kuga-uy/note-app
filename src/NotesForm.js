import React from 'react';
import './App.css';

class NotesForm extends React.Component{
    
    
    handleInput(){
        console.log('funciona');
    }

  render() {
    return (
      <>
        <form className="form-container">
            <input className="input" id="task-title" type="text" placeholder="Title" />
            <input onChange={this.handleInput} className="input" id="task-responsible" type="text" placeholder="Responsible" />
            <textarea className="input" id="task-description" type="text" placeholder="Description" />
            <select className="input">
                <option id='' value="Set priority">Set Priority</option>
                <option id='low-priority' value="Low">Low</option>
                <option id='medium-priority' value="Medium">Medium</option>
                <option id='high-priority' value="High">High</option>
            </select>
            <button type="sumbit">Add Note</button>
        </form>
      </>
      );
  }
  

}

export { NotesForm };