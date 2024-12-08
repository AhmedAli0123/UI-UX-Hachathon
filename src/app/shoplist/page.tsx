

"use client";
import React from "react";
import Image from "next/image";

const Shop = () => {
  return (
    <div className="shop-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Our Shop</h1>
          <p>Home &gt; Shop</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filters">
          <label>
            Sort By:
            <select>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </label>
          <label>
            Show:
            <select>
              <option>Default</option>
              <option>Popular</option>
            </select>
          </label>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="product-card">
          <Image src="/images/salad.jpg" alt="Salad" width={200} height={200}/>
          <h3>Salad</h3>
          <p>$12</p>
        </div>
        <div className="product-card">
          <Image src="/images/burger.jpg" alt="Burger" width={200} height={200}/>
          <h3>Burger</h3>
          <p>$15</p>
        </div>
      </section>

      {/* Search Sidebar */}
      <aside className="search-sidebar">
        <input type="text" placeholder="Search Product" />
        <h4>Category</h4>
        <ul>
          <li>
            <input type="checkbox" /> Sandwiches
          </li>
          <li>
            <input type="checkbox" /> Burger
          </li>
        </ul>
      </aside>

      {/* Styled-JSX for CSS */}
      <style jsx>{`
        .shop-container {
          display: flex;
          flex-direction: column;
          padding: 20px;
        }

        .hero-section {
          text-align: center;
          background: url('/images/hero-background.jpg') no-repeat center center/cover;
          padding: 50px 0;
          color: white;
        }

        .hero-section h1 {
          font-size: 2.5rem;
        }

        .filter-section {
          display: flex;
          justify-content: space-between;
          margin: 20px 0;
        }

        .filters label {
          margin-right: 10px;
        }

        .products-section {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .product-card {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }

        .search-sidebar {
          margin-top: 20px;
        }

        .search-sidebar input {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Shop;