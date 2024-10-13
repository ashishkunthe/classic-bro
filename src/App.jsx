import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Shopping from "./Pages/Shopping";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="shop" element={<Shopping />} />
          <Route path="shop/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
