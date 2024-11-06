"use client";
import React from "react";
import Carousel from "../Carousel"; // Import Carousel component

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      title: "Oversized T-Shirts",
      price: "₹999",
      image: "/api/placeholder/300/400",
      tag: "MAD DIWALI SALE",
    },
    {
      id: 2,
      title: "Winter Sweater",
      price: "₹1499",
      image: "/api/placeholder/300/400",
      tag: "WINTERWEAR",
    },
    {
      id: 3,
      title: "Puffer Jacket",
      price: "₹2499",
      image: "/api/placeholder/300/400",
      tag: "BEST SERVED HOT",
    },
    {
      id: 4,
      title: "Street Style",
      price: "₹1999",
      image: "/api/placeholder/300/400",
      tag: "SAVINGS ZONE",
    },
    {
      id: 5,
      title: "Urban Collection",
      price: "₹1799",
      image: "/api/placeholder/300/400",
      tag: "NEW ARRIVAL",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
      <Carousel items={products} interval={3000} />
    </div>
  );
};

export default ProductCarousel;
