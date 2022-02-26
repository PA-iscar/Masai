import {
  ADD_TODO,
  RELOAD_TODOS,
  REMOVE_TODO,
  TOGGLE_STATUS,
  USER_LOGIN,
  USER_LOGOUT,
} from "./actionTypes";

import { loadLocalData, saveLocalData } from "../Utils/localStorage";

const initState = {
  todos: [],
  total: 0,
  completed: 0,
  isAuth: loadLocalData("Token") ? true : false,
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
    case USER_LOGIN: {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: "eve.holt@reqres.in",
          password: "cityslicka",
        }),
      })
        .then((res) => res.json())
        .then((d) => {
          payload = d.token;
          saveLocalData("Token", payload);
        });
      return {
        ...state,
        isAuth: true,
      };
    }
    case USER_LOGOUT: {
      saveLocalData("Token", "");
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export { reducer };
