import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { AllProducts } from "./components/AllProducts";
import { Home } from "./components/Home";
import { ProductItem } from "./components/ProductItem";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/products">All products</Link>
          </div>

          <Switch>
            <Route path="/products">
              <AllProducts />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>
              <h1>404: Route not found</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
