import "./App.css";
import TopBar from "./components/topBar/topBar";
import Header from "./components/header/header";
import NavBar from "./components/navbar/navbar";
import React from "react";
function App() {
  return (
      <div className="app">
        <TopBar />
        <Header />
        <NavBar />
      </div>
  );
}

export default App;
