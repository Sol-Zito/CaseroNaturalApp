import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthContextProvider from "./components/context/AuthContext";
import InfoContextProvider from "./components/context/InfoContext";
import Home from "./components/pages/Home/Home";
import LogueoConteiner from "./components/logueo/LogueoConteiner";
import Template from "./components/common/Template/Template";
import UseContextProvider from "./components/context/UserContext";
import Navbar from "./components/common/navbar/Navbar";
import CreateProducto from "./components/common/CreateProducto/CreateProducto";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <InfoContextProvider>
          <UseContextProvider>
            <Routes>
              <Route element={<Navbar />}>
                <Route path="/" element={<LogueoConteiner />} />
                <Route path="/home" element={<Home />} />
                <Route path="/newProduct" element={<CreateProducto />} />
                <Route path="/template" element={<Template />} />
              </Route>
            </Routes>
          </UseContextProvider>
        </InfoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
