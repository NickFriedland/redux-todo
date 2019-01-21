import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  handleUpdate(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  handleDelete(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }
  render() {
    return (
      <div>
        <NewTodoForm createTodo={this.handleCreate} />
        <ul>
          {this.state.todos.map(todo => {
            return React.createElement(Todo, {
              deleteTodo: this.handleDelete,
              key: todo.id,
              updateTodo: this.handleUpdate,
              ...todo
            });
            /*
              <Todo
                deleteTodo={this.handleDelete}
                key={todo.id}
                task={todo}
                updateTodo={this.handleUpdate}
              />
            */
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
