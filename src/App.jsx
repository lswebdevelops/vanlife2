import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import './server'

import VanDetails from "./components/VanDetails";

function App() {
  return (
    <BrowserRouter>
      <header>
          <Link to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
