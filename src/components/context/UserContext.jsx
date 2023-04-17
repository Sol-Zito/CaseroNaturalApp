import { createContext, useReducer } from "react";

export const UserData = createContext();

const getThemeFromStorage = () => {
  const localData = localStorage.getItem("theme");
  return localData ? localData : "dark";
};

const initialValues = {
  nameStore: "",
  horario: { dias: "", horas: "" },
  instagram: "",
  segurity: {
    name: "",
    email: "",
    password: "",
  },
  theme: getThemeFromStorage(),
};

function changeValues(userstate, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      break;
    case "CHANGE_HORARIO":
      break;
    case "CHANGE_INSTAGRAM":
      break;
    case "CHANGE_ALL":
      break;

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
