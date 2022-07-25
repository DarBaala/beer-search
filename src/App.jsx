import "./scss/app.scss";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FullBeer from "./pages/FullBeer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beer/:id" element={<FullBeer />} />
    </Routes>
  );
}

export default App;
