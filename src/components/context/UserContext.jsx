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
    email: "",
    segurity: {
      name: "",
      email: "",
      phone: "",
      addres: "",
      password: "",
    },
  },
  userInfo: getUserFromStorage(),
  theme: getThemeFromStorage(),
};

function changeValues(userstate, action) {
  switch (action.type) {
    case "CHANGE_PERSONAL_DATA":
      let personal = action.payload;
      let newInfoPersonal = {
        ...userstate.userInfo,
        segurity: {
          ...userstate.userInfo.segurity,
          name: personal.name,
          email: personal.email,
          phone: personal.phone,
          addres: personal.addres,
        },
      };
      localStorage.setItem("user", JSON.stringify(newInfoPersonal));
      return { ...userstate, userInfo: getUserFromStorage() };
    case "CHANGE_BUSSINES_DATA":
      let bussines = action.payload;
      let newInfoBussines = {
        ...userstate.userInfo,
        namestore: bussines.namestore,
        email: bussines.email,
        instagram: bussines.instagram,
      };
      localStorage.setItem("user", JSON.stringify(newInfoBussines));
      return { ...userstate, userInfo: getUserFromStorage() };
    case "CHANGE_ALL":
      let newUser = action.payload;
      let newInfo = {
        ...userstate.DataBase,
        namestore: newUser.namestore,
        segurity: {
          ...userstate.DataBase.segurity,
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      };
      localStorage.setItem("user", JSON.stringify(newInfo));
      return { ...userstate, userInfo: getUserFromStorage() };
    case "CHANGE_THEME":
      if (userstate.theme === "dark") {
        localStorage.setItem("theme", "light");
      } else if (userstate.theme === "light") {
        localStorage.setItem("theme", "dark");
      }
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
