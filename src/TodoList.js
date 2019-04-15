import React, { Component } from 'react'
import './TodoList.css';
import FlipMove from 'react-flip-move';


class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      task: "",
      items: []
    }
  }

  onChange = event => {
    this.setState({
      task: event.target.value
    })
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, this.state.task]
    })
  }

  onDelete = val => {
    const data = [...this.state.items];
    data.filter((item, index) => {
      if(index === val){
        data.splice(index, 1);
      }
    });
    this.setState({items: [...data]});
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <div className="input-field">
          <input
          id="taskName"
          type="text"
          className="validate white-text"
          value={this.state.task}
          onChange={this.onChange}
          />
          <label htmlFor="taskName">What you wanna do?</label>
        </div>
      </form>
      <ul className="collection">
        <FlipMove duration={400} easing="ease-out">
        {this.state.items.map((item, index) => (
          <div className="collection-item" key={index}>

          {item}
          <i
          style={{cursor: 'pointer'}}
          className="fas fa-trash-alt right red-text"
          onClick={this.onDelete.bind(this,index)}
          ></i>
          </div>
        ))}
        </FlipMove>
      </ul>
    </div>
    )
  }
}

export default TodoList;