import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart.jsx";
import Buy from "./pages/Buy.jsx";
import Products from "./pages/Products";
import NavBar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/buy" element={<Buy/>} />
      </Routes>
     
    </Router>
  );
}

export default App;
