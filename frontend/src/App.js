import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
//import DefaultPage from "./Pages/DefaultPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
