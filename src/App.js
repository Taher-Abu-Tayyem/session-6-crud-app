import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProduct from "./Pages/AddProduct";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar/>
        </div>
        <div className="col-10">
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route path="/products/add" element={<AddProduct/>} />
        <Route path="/products/:productID" element={<ProductDetails/>} />
        <Route path="/cateogries" element={<h1>fgdf</h1>} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
