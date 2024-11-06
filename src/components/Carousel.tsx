"use client";

import React, { useEffect, useState } from 'react';

const ProductCarousel = () => {
  // Client-side state
  const [isClient, setIsClient] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const products = [
    {
      id: 1,
      title: "Oversized T-Shirts",
      price: "₹999",
      image: "/images/carousel/pp.jpg",
      tag: "MAD DIWALI SALE"
    },
    {
      id: 2,
      title: "Winter Sweater",
      price: "₹1499",
      image: "/images/carousel/pp.png",
      tag: "WINTERWEAR"
    },
    {
      id: 3,
      title: "Puffer Jacket",
      price: "₹2499",
      image: "/api/placeholder/300/400",
      tag: "BEST SERVED HOT"
    },
    {
      id: 4,
      title: "Street Style",
      price: "₹1999",
      image: "/api/placeholder/300/400",
      tag: "SAVINGS ZONE"
    },
    {
      id: 5,
      title: "Urban Collection",
      price: "₹1799",
      image: "/api/placeholder/300/400",
      tag: "NEW ARRIVAL"
    }
  ];

  // Only run client-side effects after initial render
  useEffect(() => {
    setIsClient(true);
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % (products.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Initial server-side render always shows first 3 products
  const initialProducts = products.slice(0, 3);
  
  // Only show transformed content on client-side
  const displayProducts = isClient ? products : initialProducts;
  
  return (
    <div className="w-full overflow-hidden bg-gray-100 p-8">
      <div className="relative flex flex-nowrap">
        {displayProducts.map((product, index) => (
          <div
            key={product.id}
            className="w-full md:w-1/3 px-4 flex-shrink-0"
            style={{
              transform: isClient ? `translateX(-${activeIndex * 100}%)` : 'none',
              transition: isClient ? 'transform 0.5s ease-in-out' : 'none'
            }}
          >
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm">
                  {product.tag}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">{product.price}</span>
                  <button 
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;