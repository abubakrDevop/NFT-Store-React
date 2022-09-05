import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./pages/contact/Contact";
import Creator from "./pages/creator/Creator";
import Login from "./pages/Register/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
