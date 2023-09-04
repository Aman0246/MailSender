import axios from 'axios';
import './App.css'
import Home from './Components/Home';
import Header from './Components/Navbar';
import {Routes,Route }  from 'react-router-dom'
function App() {
  axios.defaults.baseURL = 'http://localhost:7000/';

  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>

    </>
  )
}

export default App
