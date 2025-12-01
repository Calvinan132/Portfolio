import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import Portfolio from "./page/Portfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
