import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductDetail from "./components/Products/ProductDetail"; // Import the new component
import Products from "./components/Products/Products";
import AuthorsPage from "./pages/AuthorsPage";
import BookFair from "./pages/BookFair";
import CartListTable from "./pages/CartPage";
import CategoriesPage from "./pages/CategoriesPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import DaoraHadis from "./pages/DaoraHadis";
import Home from "./pages/Home";
import IslamicPonno from "./pages/IslamicPonno";
import PreOrder from "./pages/PreOrder";
import PublishersPage from "./pages/PublishersPage";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:category" element={<CategoriesPage />} />
            <Route
              path="/product/:productId"
              element={<ProductDetail />}
            />{" "}
            {/* Add the route */}
            <Route path="/authors" element={<AuthorsPage />} />
            <Route path="/publishers" element={<PublishersPage />} />
            <Route path="/path1" element={<DaoraHadis />} />
            <Route path="/book-fair" element={<BookFair />} />
            <Route path="/pre-order" element={<PreOrder />} />
            <Route path="/islamic-products" element={<IslamicPonno />} />
            <Route path="/cart" element={<CartListTable />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
