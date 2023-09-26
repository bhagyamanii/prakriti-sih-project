import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="root">
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
