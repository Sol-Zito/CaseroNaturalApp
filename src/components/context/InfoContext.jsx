import { useReducer } from "react";
import { createContext } from "react";
// lista para el template

export const InfoContext = createContext();

const setMenuStorage = (obj) => {
  let newAr = getMenuStorage();
  newAr.push(obj);
  return localStorage.setItem("menu", JSON.stringify(newAr));
};

const getMenuStorage = () => {
  const menuLocal = localStorage.getItem("menu");
  return menuLocal ? JSON.parse(menuLocal) : [];
};

const removeMenuStorage = (arr) => {
  return localStorage.setItem("menu", JSON.stringify(arr));
};

const initialValues = {
  menues: getMenuStorage(),
  sandwicheria: [],
};

console.log("menus es infoContext", initialValues.menues);

function changeValues(state, action) {
  switch (action.type) {
    case "ADD_MENUE":
      let newMenu = action.payload;
      let existe = state.menues.some((ele) => ele.id === newMenu.id);
      if (existe) {
        alert("menu ya existe en template ");
        return state;
      } else {
        setMenuStorage(newMenu);
        console.log("log de state en home", state.menues);
        alert(`add to template`);
        return { ...state, menues: getMenuStorage() };
      }
    case "REMOVE_MENUE":
      let newArr = state.menues.filter((ele) => ele.id !== action.payload.id);
      removeMenuStorage(newArr);
      alert(`remove to template`);
      return { ...state, menues: getMenuStorage() };
    case "CLEAR_ALL":
      localStorage.setItem("menu", []);
      return { ...state, menues: getMenuStorage() };

    default:
      return state;
  }
}

const InfoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(changeValues, initialValues);

  return (
    <InfoContext.Provider value={{ state, dispatch }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;
