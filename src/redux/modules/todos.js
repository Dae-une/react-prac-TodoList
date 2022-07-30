const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const IS_DONE = "IS_DONE";
const GET_ID = "GET_ID";

const initialState = {
  todos: [],
  todo: {},
};

export const addToDo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

export const isDone = (payload) => {
  return {
    type: IS_DONE,
    payload,
  };
};
export const getId = (payload) => {
  return {
    type: GET_ID,
    payload,
  };
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case IS_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        }),
      };
    case GET_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === parseInt(action.payload)),
      };
    default:
      return state;
  }
};

export default rootReducer;
