import {
  ADD_TODO,
  RELOAD_TODOS,
  REMOVE_TODO,
  TOGGLE_STATUS,
} from "./actionTypes";

const initState = {
  todos: [],
  total: 0,
  completed: 0,
};

const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, payload],
        total: state.total + 1,
      };
    }
    case RELOAD_TODOS: {
      let count = 0;
      for (const el of payload) {
        if (el.status) count++;
      }
      return {
        ...state,
        todos: [...payload],
        total: payload.length,
        completed: count,
      };
    }
    case TOGGLE_STATUS: {
      state.todos.filter((val) => val.id === payload)[0].status =
        !state.todos.filter((val) => val.id === payload)[0].status;
      const val = state.todos.filter((val) => val.id === payload)[0].status
        ? 1
        : -1;
      return {
        ...state,
        todos: [...state.todos],
        completed: state.completed + val,
      };
    }
    case REMOVE_TODO: {
      const val = state.todos.filter((val) => val.id === payload)[0].status
        ? 1
        : 0;
      return {
        ...state,
        total: state.total - 1,
        completed: state.completed - val,
      };
    }
    default:
      return state;
  }
};

export { reducer };
