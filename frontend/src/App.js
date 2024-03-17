import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import TopBar from "./components/topBar/topBar";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import RegisterForm from "./pages/register/register";
function App() {
  const Layouts = () => {
    return (
      <div>
        <TopBar />
        <Header />
        <NavBar />
        <Outlet />
      </div>
    );
  };
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Layouts />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<RegisterForm />} />

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
