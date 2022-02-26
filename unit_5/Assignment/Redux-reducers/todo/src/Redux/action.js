import {
  ADD_TODO,
  RELOAD_TODOS,
  REMOVE_TODO,
  TOGGLE_STATUS,
} from "./actionTypes";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const reloadList = (payload) => {
  return {
    type: RELOAD_TODOS,
    payload,
  };
};

export const toggleStatus = (payload) => {
  return {
    type: TOGGLE_STATUS,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};
