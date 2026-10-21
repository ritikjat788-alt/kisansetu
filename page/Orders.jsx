import React, { useEffect, useState } from "react";
import {
  Package,
  User,
  Phone,
  MapPin,
  Calendar,
  ArrowLeft,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("kisanSetuOrders")) || [];

    setOrders(savedOrders.reverse());
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="orders-page">
      <header className="orders-header">
        <div className="orders-header-inner">
          <div className="orders-brand">
            <Package size={28} />
            <div>
              <strong>KisanSetu</strong>
              <span>My Orders</span>
            </div>
          </div>

          <Link to="/products" className="back-products">
            <ArrowLeft size={18} />
            Back to Products
          </Link>
        </div>
      </header>

      <main className="orders-container">
        <div className="orders-title">
          <div>
            <h1>My Orders</h1>
            <p>Track your orders placed on KisanSetu.</p>
          </div>

          <div className="orders-count">
            {orders.length} Order{orders.length !== 1 ? "s" : ""}
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="no-orders">
            <Package size={65} />

            <h2>No Orders Yet</h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <Link to="/products" className="shop-button">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order) => (
              <article className="order-card" key={order.orderId}>
                
                <div className="order-card-header">
                  <div>
                    <span className="order-label">
                      Order ID
                    </span>

                    <strong className="order-id">
                      {order.orderId}
                    </strong>
                  </div>

                  <span className="order-status">
                    {order.status}
                  </span>
                </div>

                <div className="order-date">
                  <Calendar size={16} />
                  {formatDate(order.orderDate)}
                </div>

                <div className="order-info-grid">
                  <div className="order-info-box">
                    <User size={19} />

                    <div>
                      <small>Customer</small>
                      <strong>
                        {order.customer.name}
                      </strong>
                    </div>
                  </div>

                  <div className="order-info-box">
                    <Phone size={19} />

                    <div>
                      <small>Mobile</small>
                      <strong>
                        {order.customer.phone}
                      </strong>
                    </div>
                  </div>

                  <div className="order-info-box">
                    <MapPin size={19} />

                    <div>
                      <small>Delivery Location</small>
                      <strong>
                        {order.customer.city},{" "}
                        {order.customer.pincode}
                      </strong>
                    </div>
                  </div>
                </div>

                <div className="order-address">
                  <MapPin size={18} />

                  <div>
                    <small>Delivery Address</small>
                    <p>{order.customer.address}</p>
                  </div>
                </div>

                <div className="ordered-products">
                  <h3>
                    <Package size={19} />
                    Ordered Products
                  </h3>

                  {order.items.map((item) => (
                    <div
                      className="ordered-product"
                      key={item.id}
                    >
                      <div>
                        <strong>{item.name}</strong>

                        <span>
                          {item.quantity} kg × ₹{item.price}
                        </span>

                        <small>
                          Farmer: {item.farmer}
                        </small>
                      </div>

                      <strong>
                        ₹{item.price * item.quantity}
                      </strong>
                    </div>
                  ))}
                </div>

                <div className="order-card-footer">
                  <div>
                    <span>Total Items</span>
                    <strong>{order.totalItems}</strong>
                  </div>

                  <div className="order-total">
                    <span>Total Amount</span>
                    <strong>₹{order.totalPrice}</strong>
                  </div>
                </div>

                <div className="farmer-actions">
                  {order.items.map((item) => (
                    <div
                      className="farmer-action"
                      key={item.id}
                    >
                      <span>
                        👨‍🌾 {item.farmer}
                      </span>

                      <div>
                        <a
                          href={`tel:+${item.farmerPhone}`}
                          className="call-farmer"
                        >
                          <Phone size={16} />
                          Call
                        </a>

                        <a
                          href={`https://wa.me/${item.farmerPhone}?text=Hello ${item.farmer}, I am contacting you regarding KisanSetu Order ${order.orderId}.`}
                          target="_blank"
                          rel="noreferrer"
                          className="whatsapp-farmer"
                        >
                          <MessageCircle size={16} />
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Orders;