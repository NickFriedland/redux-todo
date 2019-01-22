const INITIAL_STATE = { todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  const copy = { ...state };
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...copy.todos, action.payload] };

    case 'UPDATE':
      // copy.todos[action.payload.id] = action.payload.updatedTask;
      // return { ...state, todos: copy.todos };
      console.log('ACTION', action);
      return {
        ...state,
        todos: copy.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo;
          }
          return {
            id: action.payload.id,
            task: action.payload.updatedTask,
            isEditing: false
          };
        })
      };

    case 'DELETE':
      console.log('COPY', copy);
      return {
        ...state,
        todos: copy.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
}

// const store = Redux.createStore(rootReducer);

export default rootReducer;
