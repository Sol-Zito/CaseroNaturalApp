import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import InfoUsuario from "./components/common/infoUsuario/InfoUsuario";
import AuthContextProvider from "./components/context/AuthContext";
import InfoContextProvider from "./components/context/InfoContext";
import Home from "./components/pages/Home/Home";
import LogueoConteiner from "./components/logueo/LogueoConteiner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <InfoContextProvider>
            <Routes>
              <Route path="/" element={<LogueoConteiner />} />
              <Route path="/home" element={<Home />} />
              <Route path="/user" element={<InfoUsuario />} />
            </Routes>
          </InfoContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
