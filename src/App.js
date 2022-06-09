import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId"> 
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

// domain.com/welcome => Welcome Component
// domain.com/products => Products Component
// domain.com/product-detail/:productId => = Product Id Detail
