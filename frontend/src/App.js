import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/topBar/topBar";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
