import SignUp from "./components/signup";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
