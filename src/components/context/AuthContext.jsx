import { createContext, useReducer } from "react";

export const AuthContext = createContext();

const userData = { name: "", email: "", password: "" };

function changeUserData(state, action) {
  switch (action.type) {
    case "CHANGE_ALL":
      let newIfo = action.payload;
      return {
        ...state,
        name: newIfo.name,
        email: newIfo.email,
        password: newIfo.password,
      };

    default:
      return state;
  }
}

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer({ userData, changeUserData });

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
