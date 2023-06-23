/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/




import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Card from "./pages/Card";
import { createContext, useState } from "react";
import ReactDOM from "react-dom/client";

export const UserContext = createContext(null);

const App = () => {
  const [item, setitem] = useState([]);
  return (
    <Router>
      <UserContext.Provider value={[item, setitem]}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/card/:id" element={<Card />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
