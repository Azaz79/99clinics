import "./App.css";
import NavBar from "./components/NavBar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./Context/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <div>
            <NavBar />
            <Alert messege="Note has been delete"/>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
