import { Routes, Route, BrowserRouter } from "react-router-dom";

import Map from "./pages/map";
import Home from "./pages/home";
import Orphanage from "./pages/orphanage";
import OrphanageCreate from "./pages/orphanage-create";

import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/orphanages/create" element={<OrphanageCreate />} />
        <Route path="/orphanages/:orphanageId" element={<Orphanage />} />
      </Routes>
    </BrowserRouter>
  );
}
