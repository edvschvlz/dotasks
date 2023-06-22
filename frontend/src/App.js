import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ChangePassword1 from './Pages/ChangePassword1';
import ChangePassword2 from './Pages/ChangePassword2';
import AccountSettings from './Pages/AccountSettings';
import Project from './Pages/Project'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password-1" element={<ChangePassword1 />} />
        <Route path="/change-password-2" element={<ChangePassword2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Project />} />
        {/* a rota account-settings é para teste de modal */} 
        <Route path="/account-settings" element={<AccountSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
