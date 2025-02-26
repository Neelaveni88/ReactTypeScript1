import { Route, Router, Routes } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from "./Components/About";
import Service from "./Components/Service";


function App() {
 

  return (
    <>
     
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
  
     
    
    </>
  )
}

export default App
