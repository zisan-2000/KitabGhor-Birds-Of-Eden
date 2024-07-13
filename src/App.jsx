import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthorsPage from "./components/AuthorsPage";
import CategoriesPage from "./components/CategoriesPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PublishersPage from "./components/PublishersPage";
import BookFair from "./pages/BookFair";
import Categories from "./pages/Categories";
import DaoraHadis from "./pages/DaoraHadis";
import Home from "./pages/Home";
import IslamicPonno from "./pages/IslamicPonno";
import PreOrder from "./pages/PreOrder";
import ProductDetail from "./pages/ProductDetail"; // Import the new component
import Products from "./pages/Products";

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
