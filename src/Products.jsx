import React, { useEffect, useState } from "react";
import { supabase } from "../supabase";

import {
  Search,
  ShoppingCart,
  MapPin,
  Leaf,
  Heart,
  X,
  Phone,
  MessageCircle,
  Plus,
  Minus,
  CheckCircle,
  User,
  MapPinned,
  Package,
} from "lucide-react";

import "./Products.css";

const products = [
  {
    id: 1,
    name: "Bajra (बाजरा)",
    english: "Fresh Bajra",
    category: "Grains",
    price: 32,
    unit: "kg",
    quantity: 500,
    farmer: "Ramesh Kumar",
    phone: "919999999901",
    displayPhone: "+91 99999 99901",
    location: "Jaipur, Rajasthan",
    image:
     "https://commons.wikimedia.org/wiki/Special:FilePath/Bajra_-_pearl_millet.jpg", 
  },
  {
    id: 2,
    name: "Jowar (ज्वार)",
    english: "Fresh Jowar",
    category: "Grains",
    price: 35,
    unit: "kg",
    quantity: 800,
    farmer: "Mohan Singh",
    phone: "919999999902",
    displayPhone: "+91 99999 99902",
    location: "Sikar, Rajasthan",
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/Jowar.jpg",
  },
  {
    id: 3,
   name: "Wheat (गेहूँ)",
    english: "Fresh Wheat",
    category: "Grains",
    price: 32,
    unit: "kg",
    quantity: 1200,
    farmer: "Rajesh Sharma",
    phone: "919999999903",
    displayPhone: "+91 99999 99903",
    location: "Kota, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
   name: "Barley (जौ)",
    english: "Fresh Barley",
    category: "Grains",
    price: 30,
    unit: "kg",
    quantity: 600,
    farmer: "Suresh Kumar",
    phone: "919999999904",
    displayPhone: "+91 99999 99904",
    location: "Alwar, Rajasthan",
    image:
      "https://zemliak.com/uploads/all/b0/f5/d9/b0f5d96a0395386b02baec62f291ea41.jpg",
  },
  {
    id: 5,
   name: "Maize (मक्का)",
    english: "Fresh Maize",
    category: "Grains",
    price: 28,
    unit: "kg",
    quantity: 900,
    farmer: "Mahendra Singh",
    phone: "919999999905",
    displayPhone: "+91 99999 99905",
    location: "Bharatpur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Rice (चावल)",
    english: "Fresh Rice",
    category: "Grains",
    price: 42,
    unit: "kg",
    quantity: 700,
    farmer: "Vijay Kumar",
    phone: "919999999906",
    displayPhone: "+91 99999 99906",
    location: "Kota, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Chana (चना)",
    english: "Fresh Chana",
    category: "Pulses",
    price: 72,
    unit: "kg",
    quantity: 450,
    farmer: "Dinesh Sharma",
    phone: "919999999907",
    displayPhone: "+91 99999 99907",
    location: "Ajmer, Rajasthan",
    image:
     "https://commons.wikimedia.org/wiki/Special:FilePath/Chana.jpg",
  },
  {
    id: 8,
    name: "Moong (मूंग)",
    english: "Fresh Moong",
    category: "Pulses",
    price: 85,
    unit: "kg",
    quantity: 350,
    farmer: "Gopal Singh",
    phone: "919999999908",
    displayPhone: "+91 99999 99908",
    location: "Nagaur, Rajasthan",
    image: 
    "https://commons.wikimedia.org/wiki/Special:FilePath/MungBeans.jpg",
  },
     
  {
    id: 9,
   name: "Mustard (सरसों)",
    english: "Fresh Mustard",
    category: "Oil Seeds",
    price: 58,
    unit: "kg",
    quantity: 650,
    farmer: "Hari Singh",
    phone: "919999999909",
    displayPhone: "+91 99999 99909",
    location: "Bharatpur, Rajasthan",
    image:
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mustard_Seed.jpg",
  },
  {
    id: 10,
   name: "Potato (आलू)",
    english: "Fresh Potato",
    category: "Vegetables",
    price: 25,
    unit: "kg",
    quantity: 1000,
    farmer: "Mohan Lal",
    phone: "919999999910",
    displayPhone: "+91 99999 99910",
    location: "Agra, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Tomato (टमाटर)",
    english: "Fresh Tomato",
    category: "Vegetables",
    price: 30,
    unit: "kg",
    quantity: 500,
    farmer: "Ramesh Kumar",
    phone: "919999999901",
    displayPhone: "+91 99999 99901",
    location: "Jaipur, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
   name: "Onion (प्याज़)",
    english: "Fresh Onion",
    category: "Vegetables",
    price: 30,
    unit: "kg",
    quantity: 700,
    farmer: "Suresh Kumar",
    phone: "919999999904",
    displayPhone: "+91 99999 99904",
    location: "Alwar, Rajasthan",
    image:
      "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=800&q=80",
  },
];
const categories = [
  "All Products",
  "Grains",
  "Pulses",
  "Oil Seeds",
  "Vegetables",
];
const getAIPrice = (product) => {
  const ranges = {
    "Bajra (बाजरा)": [34, 40],
    "Jowar (ज्वार)": [37, 44],
    "Wheat (गेहूँ)": [34, 39],
    "Barley (जौ)": [32, 38],
    "Maize (मक्का)": [30, 36],
    "Rice (चावल)": [45, 53],
    "Chana (चना)": [76, 88],
    "Moong (मूंग)": [90, 102],
    "Mustard (सरसों)": [61, 70],
    "Potato (आलू)": [27, 34],
    "Tomato (टमाटर)": [32, 42],
    "Onion (प्याज़)": [32, 40],
  };

  const range = ranges[product.name] || [
    product.price,
    product.price + 5,
  ];

  return {
    min: range[0],
    max: range[1],
    average: Math.round((range[0] + range[1]) / 2),
  };
};
function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
const [databaseProducts, setDatabaseProducts] = useState([]);
const [loadingCrops, setLoadingCrops] = useState(true);
const [cropLoadError, setCropLoadError] = useState("");

  // ORDER STATES
  const [orderOpen, setOrderOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const [orderId, setOrderId] = useState("");
useEffect(() => {
   
async function loadCrops() {
  const { data, error } = await supabase
    .from("crops")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Could not load crops:", error.message);
    setCropLoadError(error.message);
    setLoadingCrops(false);
    return;
  }

  const mappedCrops = await Promise.all(
    (data || []).map(async (crop) => {
      let imageUrl =
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80";

      if (crop.image_url) {
        const { data: signedImage, error: imageError } =
          await supabase.storage
            .from("crop-images")
            .createSignedUrl(crop.image_url, 3600);

        if (!imageError && signedImage?.signedUrl) {
          imageUrl = signedImage.signedUrl;
        }
      }
      return {
        id: `db-${crop.id}`,
        name: crop.name,
        english: crop.name,
        category: crop.category || "Other",
        price: Number(crop.price),
        unit: crop.unit || "kg",
        quantity: Number(crop.quantity),
        farmer: crop.farmer_name || "KisanSetu Farmer",
        phone: "",
        displayPhone: "Contact details not available",
        location: crop.location || "Location not provided",
        image: imageUrl,
      };
    })
  );

  setDatabaseProducts(mappedCrops);
  setLoadingCrops(false);
}
loadCrops();
}, []);
   

const normalizeCropName = (name = "") =>
  name
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]/g, "")
    .trim();

const demoProducts = products.filter((demo) => {
  const demoName = normalizeCropName(demo.english || demo.name);

  return !databaseProducts.some((db) => {
    const dbName = normalizeCropName(db.english || db.name);
    return dbName === demoName;
  });
});

const allProducts = [...databaseProducts, ...demoProducts];



const filteredProducts = allProducts.filter((product) => {
  const searchText = search.toLowerCase();

  const matchesSearch =
    product.name.toLowerCase().includes(searchText) ||
    product.english.toLowerCase().includes(searchText) ||
    product.farmer.toLowerCase().includes(searchText);

  const matchesCategory =
    category === "All Products" || product.category === category;

  return matchesSearch && matchesCategory;
});



  const addToCart = (product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        );
      }

      return [...current, { ...product, cartQuantity: 1 }];
    });

    setCartOpen(true);
  };

  const increaseQuantity = (id) => {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0)
    );
  };

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.cartQuantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.cartQuantity,
    0
  );

  // OPEN ORDER FORM
  const openOrderForm = () => {
    if (cart.length === 0) return;

    setCartOpen(false);
    setOrderPlaced(false);
    setOrderOpen(true);
  };

  // INPUT CHANGE
  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  // PLACE ORDER
  const placeOrder = (e) => {
  e.preventDefault();

  if (
    !customer.name.trim() ||
    !customer.phone.trim() ||
    !customer.address.trim() ||
    !customer.city.trim() ||
    !customer.pincode.trim()
  ) {
    alert("Please fill all customer details.");
    return;
  }

  const generatedOrderId =
    "KS" + Date.now().toString().slice(-8);

  const newOrder = {
    orderId: generatedOrderId,
    customer: {
      ...customer,
    },
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.cartQuantity,
      farmer: item.farmer,
      farmerPhone: item.phone,
      location: item.location,
    })),
    totalItems,
    totalPrice,
    orderDate: new Date().toISOString(),
    status: "Placed",
  };

  // Get old orders
  const oldOrders =
    JSON.parse(localStorage.getItem("kisanSetuOrders")) || [];

  // Add new order
  const updatedOrders = [...oldOrders, newOrder];

  // Save orders
  localStorage.setItem(
    "kisanSetuOrders",
    JSON.stringify(updatedOrders)
  );

  setOrderId(generatedOrderId);
  setOrderPlaced(true);
};

  // CLOSE ORDER
  const closeOrder = () => {
    setOrderOpen(false);
    setOrderPlaced(false);
  };

  // FINAL ORDER COMPLETE
  const finishOrder = () => {
    setCart([]);
    setCustomer({
      name: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    });

    setOrderOpen(false);
    setOrderPlaced(false);
    setCartOpen(false);
  };

  return (
    <div className="marketplace">

      {/* HEADER */}
      <header className="market-header">
        <div className="header-inner">

          <a href="/" className="brand">
            <div className="brand-icon">
              <Leaf size={25} />
            </div>

            <div>
              <strong>KisanSetu</strong>
              <small>Farmers • Fresh • For You</small>
            </div>
          </a>

          <nav>
            <a href="/">Home</a>
            <a className="active" href="/products">
              Products
            </a>
            <a href="/">How It Works</a>
            <a href="/add-crop">For Farmers</a>
          </nav>

          <div className="header-actions">

            <button
              className="cart-button"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingCart size={21} />

              {totalItems > 0 && (
                <span>{totalItems}</span>
              )}
            </button>

            <button className="login-btn">
              Login
            </button>

            <button className="signup-btn">
              Sign Up
            </button>

          </div>

        </div>
      </header>

      {/* HERO */}
      <section className="market-hero">
        <div className="hero-overlay">

          <div className="hero-content">

            <div className="hero-label">
              <Leaf size={17} />
              Fresh From Farms
            </div>

            <h1>
              Pure. Natural.
              <br />
              <span>Direct from Farmers.</span>
            </h1>

            <p>
              Buy fresh crops directly from farmers and
              support local agriculture.
            </p>

          </div>

        </div>
      </section>

      {/* CONTENT */}
      <main className="market-content">

        <div className="top-search">

          <div className="search-box">
            <Search size={21} />

            <input
              type="text"
              placeholder="Search for crops (e.g. Bajra, Jowar, Wheat...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <select className="sort-box">
            <option>Sort by: Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

        </div>

        <div className="category-tabs">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "tab active" : "tab"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

        <div className="market-layout">

          {/* SIDEBAR */}
          <aside className="sidebar">

            <div className="side-card">

              <h3>🌿 Categories</h3>

              {categories.map((item) => (
                <button
                  key={item}
                  className={
                    category === item
                      ? "side-category selected"
                      : "side-category"
                  }
                  onClick={() => setCategory(item)}
                >
                  <span>{item}</span>

                  <b>
                
               {item === "All Products"
              ? allProducts.length
             : allProducts.filter(
             (p) => p.category === item
             ).length}
            </b>
            </button>
             ))}

            </div>

            <div className="support-card">

              <Leaf size={42} />

              <h2>
                Support
                <br />
                Farmers
              </h2>

              <p>
                Build a Better
                <br />
                Tomorrow
              </p>

              <a href="/add-crop">
                Start Selling →
              </a>

            </div>

          </aside>

          {/* PRODUCTS */}
          <section className="products-section">

            <div className="result-heading">
              <div>
                <h2>Fresh Products</h2>

                <p>
                  {filteredProducts.length} products available
                </p>
              </div>
            </div>

            <div className="market-grid">

              {filteredProducts.map((product) => (

                <article
                  className="market-card"
                  key={product.id}
                >

                  <div className="crop-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <span className="crop-badge">
                      {product.category}
                    </span>

                    <button
                      className={
                        favorites.includes(product.id)
                          ? "favorite liked"
                          : "favorite"
                      }
                      onClick={() =>
                        toggleFavorite(product.id)
                      }
                    >
                      <Heart
                        size={18}
                        fill={
                          favorites.includes(product.id)
                            ? "currentColor"
                            : "none"
                        }
                      />
                    </button>

                  </div>

                  <div className="crop-details">

                    <h3>{product.name}</h3>

                    <div className="crop-price">
                      ₹{product.price}
                      <small> / {product.unit}</small>
                    </div>

  
                    <p className="available">
                      Available: {product.quantity} kg
                    </p>

                    <div className="farmer-info">

                      <div className="farmer-avatar">
                        👨‍🌾
                      </div>

                      <div>
                        <strong>{product.farmer}</strong>

                        <small>
                          <MapPin size={12} />
                          {product.location}
                        </small>
                      </div>

                    </div>

                    <button
                      className="add-button"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={17} />
                      Add to Cart
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>

        </div>

      </main>

      {/* CART DRAWER */}
      {cartOpen && (
        <>
          <div
            className="drawer-overlay"
            onClick={() => setCartOpen(false)}
          />

          <aside className="cart-drawer">

            <div className="drawer-header">

              <div>
                <h2>Your Cart</h2>
                <p>{totalItems} item(s)</p>
              </div>

              <button
                onClick={() => setCartOpen(false)}
                className="close-drawer"
              >
                <X size={22} />
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <ShoppingCart size={55} />

                <h3>Your cart is empty</h3>

                <p>
                  Add fresh products directly from farmers.
                </p>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h3>{item.name}</h3>

                        <strong>
                          ₹{item.price} / kg
                        </strong>

                        <div className="qty-control">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            <Minus size={14} />
                          </button>

                          <span>{item.cartQuantity}</span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            <Plus size={14} />
                          </button>

                        </div>

                        <div className="cart-farmer">
                          👨‍🌾 {item.farmer}
                          <br />
                          <span>
                            📍 {item.location}
                          </span>
                        </div>

                        {/* FARMER CONTACT */}
                        <div className="farmer-contact">

                          <div>
                            <small>Farmer Contact</small>

                            <strong>
                              {item.displayPhone}
                            </strong>
                          </div>

                          <div className="contact-actions">

                            <a
                              href={`tel:+${item.phone}`}
                              title="Call Farmer"
                            >
                              <Phone size={16} />
                            </a>

                            <a
                              href={`https://wa.me/${item.phone}?text=Hello ${item.farmer}, I am interested in your ${item.name} on KisanSetu.`}
                              target="_blank"
                              rel="noreferrer"
                              title="WhatsApp Farmer"
                            >
                              <MessageCircle size={17} />
                            </a>

                          </div>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-bottom">

                  <div className="cart-total">
                    <span>Total</span>
                    <strong>₹{totalPrice}</strong>
                  </div>

                  {/* WORKING ORDER BUTTON */}
                  <button
                    className="order-button"
                    onClick={openOrderForm}
                  >
                    Proceed to Order
                  </button>

                  <p className="direct-order-note">
                    📦 Enter your delivery details to place
                    the order.
                  </p>

                </div>

              </>

            )}

          </aside>
        </>
      )}

      {/* ORDER FORM MODAL */}
      {orderOpen && (
        <div className="order-modal-overlay">

          <div className="order-modal">

            {!orderPlaced ? (

              <>

                <div className="order-modal-header">

                  <div>
                    <h2>Complete Your Order</h2>
                    <p>
                      Enter your delivery details
                    </p>
                  </div>

                  <button
                    className="close-order"
                    onClick={closeOrder}
                  >
                    <X size={22} />
                  </button>

                </div>

                {/* ORDER SUMMARY */}
                <div className="order-summary">

                  <div className="summary-title">
                    <Package size={19} />
                    Order Summary
                  </div>

                  {cart.map((item) => (
                    <div
                      className="summary-item"
                      key={item.id}
                    >

                      <span>
                        {item.name} × {item.cartQuantity}
                      </span>

                      <strong>
                        ₹{item.price * item.cartQuantity}
                      </strong>

                    </div>
                  ))}

                  <div className="summary-total">
                    <span>Total Amount</span>
                    <strong>₹{totalPrice}</strong>
                  </div>

                </div>

                {/* CUSTOMER FORM */}
                <form
                  className="order-form"
                  onSubmit={placeOrder}
                >

                  <h3>
                    <User size={19} />
                    Customer Details
                  </h3>

                  <label>
                    Full Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={customer.name}
                      onChange={handleCustomerChange}
                    />
                  </label>

                  <label>
                    Mobile Number
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter mobile number"
                      value={customer.phone}
                      onChange={handleCustomerChange}
                    />
                  </label>

                  <label>
                    Delivery Address
                    <textarea
                      name="address"
                      placeholder="House no., street, area..."
                      value={customer.address}
                      onChange={handleCustomerChange}
                      rows="3"
                    />
                  </label>

                  <div className="form-row">

                    <label>
                      City
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        value={customer.city}
                        onChange={handleCustomerChange}
                      />
                    </label>

                    <label>
                      PIN Code
                      <input
                        type="text"
                        name="pincode"
                        placeholder="PIN Code"
                        maxLength="6"
                        value={customer.pincode}
                        onChange={handleCustomerChange}
                      />
                    </label>

                  </div>

                  <div className="delivery-info">
                    <MapPinned size={18} />

                    <span>
                      Your order will be coordinated
                      directly with the farmer.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="place-order-button"
                  >
                    Place Order — ₹{totalPrice}
                  </button>

                </form>

              </>

            ) : (

              /* ORDER SUCCESS */
              <div className="order-success">

                <div className="success-icon">
                  <CheckCircle size={65} />
                </div>

                <h2>Order Placed Successfully!</h2>

                <p className="success-message">
                  Thank you, {customer.name}.
                  Your order request has been created.
                </p>

                <div className="order-id-box">
                  <span>Order ID</span>
                  <strong>{orderId}</strong>
                </div>

                <div className="success-details">

                  <div>
                    <User size={18} />
                    <span>{customer.name}</span>
                  </div>

                  <div>
                    <Phone size={18} />
                    <span>{customer.phone}</span>
                  </div>

                  <div>
                    <MapPin size={18} />
                    <span>
                      {customer.city} - {customer.pincode}
                    </span>
                  </div>

                  <div>
                    <Package size={18} />
                    <span>
                      {totalItems} item(s) — ₹{totalPrice}
                    </span>
                  </div>

                </div>

                <div className="farmer-order-info">

                  <h3>📞 Contact Farmer</h3>

                  {cart.map((item) => (

                    <div
                      className="success-farmer"
                      key={item.id}
                    >

                      <div>
                        <strong>{item.farmer}</strong>

                        <span>
                          {item.name} × {item.cartQuantity}
                        </span>

                        <small>
                          {item.displayPhone}
                        </small>
                      </div>

                      <div className="success-contact-buttons">

                        <a
                          href={`tel:+${item.phone}`}
                        >
                          <Phone size={17} />
                        </a>

                        <a
                          href={`https://wa.me/${item.phone}?text=Hello ${item.farmer}, I have placed an order for ${item.name} on KisanSetu. My Order ID is ${orderId}.`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <MessageCircle size={18} />
                        </a>

                      </div>

                    </div>

                  ))}

                </div>

                <button
                  className="finish-order-button"
                  onClick={finishOrder}
                >
                  Done
                </button>

              </div>

            )}

          </div>

        </div>
      )}

      {/* FOOTER */}
      <footer className="market-footer">

        <div className="footer-brand">

          <Leaf size={27} />

          <strong>KisanSetu</strong>

          <span>
            Connecting Farmers Directly With Consumers
          </span>

        </div>

        <div className="footer-links">
          <span>About Us</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms & Conditions</span>
        </div>

        <div className="footer-copy">
          © 2026 KisanSetu
        </div>

      </footer>

    </div>
  );
}

export default Products;


