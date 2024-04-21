import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import TopBar from "./components/topBar/topBar";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import RegisterForm from "./pages/register/register";
import Admin from "./pages/admin/admin";
import AdminHome from "./pages/admin/adminDashboard/adminDashboard";
import AdmindminSetting from "./pages/admin/adminSetting/adminSetting";
import Orders from "./pages/admin/orders/order";
import Products from "./pages/admin/products/products";
import AddNewProduct from "./pages/admin/products/addnew/addnew";
function App() {
  const [user , currUser] = useState('admin')
  const Layouts = () => {
    return (
      <div>
        <TopBar />
        <Navbar />
        <Outlet />
      </div>
    );
  };
  if(user == 'admin' ){
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element = {<Admin/>}>
            <Route path="/admin/dashboard" element={<AdminHome/>}/>
            <Route path="/admin/orders" element = {<Orders/>}/>
            <Route path="/admin/products" element = {<Products/>} />
            <Route path="/admin/add-new" element = {<AddNewProduct/>}/>
            <Route path="/admin/settings" element = {<AdmindminSetting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }else{
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
}

export default App;
