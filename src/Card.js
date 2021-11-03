import React from 'react';
import './App.css';

class Card extends React.Component {


render() {  

    return (
        <div className="card">
            <span className="title">{this.props.title}</span>
            <span className="responsible">Responsible: {this.props.responsible}</span>
            <span className="description">Description: {this.props.description}</span>
            <span className="priority">Priority: {this.props.priority}</span>
        </div>
    )
}
   
} 




export { Card }; 