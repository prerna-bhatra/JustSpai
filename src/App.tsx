import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavBar";
import SignUpForm from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import AddToCartPage from "./components/AddToCartPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add_to_cart" element={<AddToCartPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
