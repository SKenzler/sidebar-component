import { useState } from "react";
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
