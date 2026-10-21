import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Tractor,
  TrendingUp,
  Truck,
  ArrowRight,
  Leaf,
  Users,
} from "lucide-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chatbot from "./Chatbot";

import Products from "./pages/Products";
import AddCrop from "./pages/AddCrop";
import Orders from "./pages/Orders";
import KisanHero3D from "./KisanHero3D";
import "./App.css";


const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    farmer: "Ramesh Kumar",
    location: "Jaipur",
    price: 28,
    unit: "kg",
    quantity: 500,
    emoji: "🍅",
  },
  {
    id: 2,
    name: "Fresh Potatoes",
    category: "Vegetables",
    farmer: "Mohan Singh",
    location: "Sikar",
    price: 24,
    unit: "kg",
    quantity: 800,
    emoji: "🥔",
  },
  {
    id: 3,
    name: "Wheat",
    category: "Grains",
    farmer: "Rajesh Sharma",
    location: "Kota",
    price: 32,
    unit: "kg",
    quantity: 1200,
    emoji: "🌾",
  },
  {
    id: 4,
    name: "Fresh Onions",
    category: "Vegetables",
    farmer: "Suresh Kumar",
    location: "Alwar",
    price: 30,
    unit: "kg",
    quantity: 700,
    emoji: "🧅",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          <Leaf size={28} />
          <span>KisanSetu</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="/products">Products</a>
          <a href="#how">How It Works</a>
          <a href="#farmers">For Farmers</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Login</button>

          <button className="cart-btn">
            <ShoppingCart size={20} />
            Cart ({cart.length})
          </button>
        </div>
      </nav>

<KisanHero3D />
     
      <section className="features" id="how">

        <div className="section-heading">
          <span>WHY KISANSETU</span>
          <h2>Better for Everyone</h2>
          <p>
            We connect farmers directly with consumers and businesses.
          </p>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">
              <Tractor />
            </div>
            <h3>Better Price for Farmers</h3>
            <p>
              Farmers can sell directly without unnecessary middlemen.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users />
            </div>
            <h3>Direct Buyers</h3>
            <p>
              Consumers and bulk buyers can purchase directly from farms.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <TrendingUp />
            </div>
            <h3>AI Price Insights</h3>
            <p>
              AI helps farmers understand estimated demand and pricing.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Truck />
            </div>
            <h3>Easy Delivery</h3>
            <p>
              Delivery management helps move products from farm to buyer.
            </p>
          </div>

        </div>
      </section>

      <section className="products-section" id="products">

        <div className="section-heading">
          <h1>
  Khet Se <span>Seedha</span>
  <br />
  Aap Tak
</h1>
          <h2>Popular Products</h2>
          <p>
            Fresh agricultural products from farmers.
          </p>
        </div>

        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search vegetables, fruits, grains..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="product-grid">

          {filteredProducts.map((product) => (

            <div className="product-card" key={product.id}>

              <div className="product-image">
                {product.emoji}
              </div>

              <div className="product-info">

                <div className="category">
                  {product.category}
                </div>

                <h3>{product.name}</h3>

                <p className="farmer">
                  👨‍🌾 {product.farmer}
                </p>

                <p className="location">
                  📍 {product.location}
                </p>

                <div className="product-bottom">

                  <div>
                    <strong>₹{product.price}</strong>
                    <span> / {product.unit}</span>
                  </div>

                  <button
                    className="add-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add
                  </button>

                </div>

                <small>
                  Available: {product.quantity} {product.unit}
                </small>

              </div>

            </div>

          ))}

        </div>
      </section>

      <section className="farmer-section" id="farmers">

        <div>

          <span>FOR FARMERS</span>

          <h2>
            Sell Your Crops
            <br />
            Directly to Buyers
          </h2>

          <p>
            List your crops, reach more buyers and get AI-assisted
            price insights.
          </p>

          <a href="/add-crop" className="primary-btn">
  Start Selling <ArrowRight size={18} />
</a>

        </div>

        <div className="farmer-dashboard-preview">

          <div className="dashboard-header">
            <span>Farmer Dashboard</span>
            <span>● Online</span>
          </div>

          <div className="dashboard-stats">

            <div>
              <small>Total Sales</small>
              <strong>₹48,500</strong>
            </div>

            <div>
              <small>Products</small>
              <strong>12</strong>
            </div>

            <div>
              <small>Orders</small>
              <strong>28</strong>
            </div>

          </div>

          <div className="ai-insight">
            <TrendingUp />

            <div>
              <strong>AI Market Insight</strong>
              <p>Tomato demand is currently high.</p>
            </div>

          </div>

        </div>

      </section>

      <footer>

      

  <div className="logo">
    <Leaf size={24} />
    <span>KisanSetu</span>
  </div>

  <p>
    Connecting farmers directly with consumers.
  </p>

  <p>
    © 2026 KisanSetu
  </p>

</footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/add-crop" element={<AddCrop />} />
  <Route path="/orders" element={<Orders />} />
</Routes> 


      <Chatbot />
    </BrowserRouter>
  );
}

export default App;
