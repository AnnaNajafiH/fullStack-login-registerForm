
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import axios from 'axios';    //3. import axios in app.jsx

axios.defaults.baseURL = 'http://localhost:3000';  //4. set the base URL of the API
axios.defaults.withCredentials = true;              //5. set withCredentials to true

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>	
    </>
  )
}

export default App
