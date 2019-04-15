import React from 'react';
import TodoList from './TodoList';


class App extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m6 offset-m3">
            <h1 className="center animated infinite pulse delay-2s teal-text">Todo List App</h1>
            <TodoList />
          </div>
        </div>
      </div>
    )
  }
}

export default App;