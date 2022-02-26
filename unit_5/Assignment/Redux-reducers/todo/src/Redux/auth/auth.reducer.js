import { USER_LOGIN, USER_LOGOUT } from "./auth.actionTypes";
import { saveLocalData } from "../../Utils/localStorage";
import { initState } from "./auth.constants";

const authReducer = (state = initState, { type }) => {
  switch (type) {
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
          saveLocalData("Token", d.token);
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

export default authReducer;
