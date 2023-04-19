import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoContextProvider from "./components/context/InfoContext";
import Home from "./components/pages/Home/Home";
import LogueoConteiner from "./components/logueo/LogueoConteiner";
import Template from "./components/common/Template/Template";
import UseContextProvider from "./components/context/UserContext";
import Navbar from "./components/common/navbar/Navbar";
import CreateProducto from "./components/common/CreateProducto/CreateProducto";

import "./index.css";
import FormContainer from "./components/pages/Form/FormContainer";

function App() {
  return (
    <BrowserRouter>
      <InfoContextProvider>
        <UseContextProvider>
          <Routes>
            <Route path="/" element={<LogueoConteiner />} />
            <Route element={<Navbar />}>
              <Route path="/home" element={<Home />} />
              <Route path="/newProduct" element={<CreateProducto />} />
              <Route path="/template" element={<Template />} />
            </Route>
            <Route path="/newContact" element={<FormContainer />} />
          </Routes>
        </UseContextProvider>
      </InfoContextProvider>
    </BrowserRouter>
  );
}

export default App;
