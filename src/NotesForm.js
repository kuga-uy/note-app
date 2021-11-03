import React from 'react';
import './App.css';

class NotesForm extends React.Component{
    
    constructor(){
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: ''
        }
        /*link methods to object*/
        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //to say handleInput method is part of this object
    }


   

    handleForm(e){ 
        const {value, name} = e.target //destructuring
        console.log(e.target.name, e.target.value)
        this.setState({
            [name]: value //want name to has the value passed in;
        }) //the unique way to handle state

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addNote(this.state)
    }

    

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="form-container">
            <input onChange={this.handleForm} name="title" className="input" id="task-title" type="text" placeholder="Title" />
            <input onChange={this.handleForm} name="responsible" className="input" id="task-responsible" type="text" placeholder="Responsible" />
            <textarea onChange={this.handleForm} name="description" className="input" id="task-description" type="text" placeholder="Description" />
            <select name="priority" onChange={this.handleForm} className="input">
                <option name="low" id='low-priority'>Low</option>
                <option name="Medium" id='medium-priority' >Medium</option>
                <option name="high" id='high-priority'>High</option>
            </select>
            <button type="sumbit">Add Note</button>
        </form>
      </>
      );
  }
  

}

export { NotesForm };