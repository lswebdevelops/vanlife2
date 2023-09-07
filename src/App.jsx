import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./server";
import VanDetails from "./pages/Vans/VanDetails";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import Reviews from "./pages/Host/Reviews";
import Income from "./pages/Host/Income";
import Dashboard from "./pages/host/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetails />} />
          {/* host:  > here dashboard is acting as a layout route */}
          <Route path="host"  element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
