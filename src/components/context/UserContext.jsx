import { createContext, useReducer } from "react";

export const UserData = createContext();

const initialValues = {
  nameStore: "",
  horario: { dias: "", horas: "" },
  instagram: "",
  segurity: {
    name: "",
    email: "",
    password: "",
  },
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
