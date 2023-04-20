import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoContextProvider from "./components/context/InfoContext";
import Home from "./components/pages/Home/Home";
import LogueoConteiner from "./components/logueo/LogueoConteiner";
import Template from "./components/common/Template/Template";
import UseContextProvider from "./components/context/UserContext";
import Navbar from "./components/common/Layout/navbar/Navbar";
import CreateProducto from "./components/common/CreateProducto/CreateProducto";

import "./index.css";
import FormContainer from "./components/pages/Form/FormContainer";
import Account from "./components/pages/Account/Account";
import {
  ChangeDataBussines,
  ChangeDataPersonal,
} from "./components/pages/Account/changeData";
import Layout from "./components/common/Layout/Layout";
import CardUpdateProduct from "./components/common/card/CardUpdateProduct";

function App() {
  return (
    <BrowserRouter>
      <InfoContextProvider>
        <UseContextProvider>
          <Routes>
            <Route path="/" element={<LogueoConteiner />} />
            <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/newProduct" element={<CreateProducto />} />
              <Route
                path="/updateProduct/:id"
                element={<CardUpdateProduct />}
              />
              <Route path="/template" element={<Template />} />
              <Route path="/account" element={<Account />} />
              <Route
                path="/account/changeDataPersonal"
                element={<ChangeDataPersonal />}
              />
              <Route
                path="/account/ChangeDataBussines"
                element={<ChangeDataBussines />}
              />
            </Route>
            <Route path="/newContact" element={<FormContainer />} />
          </Routes>
        </UseContextProvider>
      </InfoContextProvider>
    </BrowserRouter>
  );
}

export default App;
