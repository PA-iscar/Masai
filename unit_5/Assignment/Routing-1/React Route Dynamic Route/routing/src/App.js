import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products" element={<Products />}>
            <Route path=":id" element={<ProductItem />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
