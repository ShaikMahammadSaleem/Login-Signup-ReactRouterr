import React from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
 return (
   <Router>
     <div className="App">
       <Routes> 
         <Route path="/login" element={<Login/>} />
         <Route path="/Signup" element={<Signup/>} />
         <Route path="/home" element={<Home />} />
         <Route path="/" element={<Navigate replace to="/login" />} />
       </Routes>
     </div>
   </Router>
 )
}

export default App


