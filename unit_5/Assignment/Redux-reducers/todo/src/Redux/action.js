import {
  ADD_TODO,
  RELOAD_TODOS,
  REMOVE_TODO,
  TOGGLE_STATUS,
  USER_LOGIN,
  USER_LOGOUT,
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

export const userLogin = (payload) => {
  return {
    type: USER_LOGIN,
    payload,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
