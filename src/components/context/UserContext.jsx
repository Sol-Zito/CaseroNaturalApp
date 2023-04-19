import { createContext, useReducer } from "react";

export const UserData = createContext();

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : "dark";
};

const getUserFromStorage = () => {
  const localData = localStorage.getItem("user");
  return localData ? JSON.parse(localData) : {};
};

const initialValues = {
  DataBase: {
    namestore: "",
    instagram: "",
    segurity: {
      name: "",
      email: "",
      password: "",
    },
  },
  userInfo: getUserFromStorage(),
  theme: getThemeFromStorage(),
};

function changeValues(userstate, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return;
    case "CHANGE_HORARIO":
      return;
    case "CHANGE_INSTAGRAM":
      return;
    case "CHANGE_ALL":
      let newUser = action.payload;
      console.log("action.payload", action.payload);
      let newInfo = {
        ...userstate.DataBase,
        namestore: newUser.namestore,
        segurity: {
          ...userstate.user.segurity,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      };
      console.log("userstate", newInfo);
      localStorage.setItem("user", JSON.stringify(newInfo));
      return { ...userstate, userInfo: getUserFromStorage() };
    case "CHANGE_THEME":
      if (userstate.theme === "dark") {
        localStorage.setItem("theme", "light");
      } else if (userstate.theme === "light") {
        localStorage.setItem("theme", "dark");
      }
      alert("se cambio el theme");
      return { ...userstate, theme: getThemeFromStorage() };

    default:
      break;
  }
}

const UseContextProvider = ({ children }) => {
  const [userstate, userdispatch] = useReducer(changeValues, initialValues);
  return (
    <UserData.Provider value={{ userstate, userdispatch }}>
      {children}
    </UserData.Provider>
  );
};

export default UseContextProvider;
