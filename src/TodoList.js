import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import { connect } from 'react-redux';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCreate(newTodo) {
    this.props.dispatch({ type: 'ADD', payload: newTodo });
  }
  handleUpdate(id, updatedTask) {
    this.props.dispatch({ type: 'UPDATE', payload: { id, updatedTask } });
  }
  handleDelete(id) {
    this.props.dispatch({ type: 'DELETE', payload: id });
  }
  render() {
    console.log('TODO LIST TODOS', this.props.todos);
    return (
      <div>
        <NewTodoForm createTodo={this.handleCreate} />
        <ul>
          {this.props.todos.map(todo => {
            // return React.createElement(Todo, {
            //   deleteTodo: this.handleDelete,
            //   key: todo.id,
            //   updateTodo: this.handleUpdate,
            //   ...todo
            // });

            return (
              <Todo
                deleteTodo={this.handleDelete}
                key={todo.id}
                todo={todo}
                updateTodo={this.handleUpdate}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { todos: state.todos };
}

const connectToState = connect(mapStateToProps);

export default connectToState(TodoList);
