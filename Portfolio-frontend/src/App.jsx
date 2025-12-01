import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
