import { loadLocalData } from "../../Utils/localStorage";

export const initState = {
    isAuth: loadLocalData("Token") ? true : false,
  };
  