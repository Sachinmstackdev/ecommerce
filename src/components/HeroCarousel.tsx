'use client'

import React from 'react';
import Image from 'next/image';

const InfiniteCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const cards = [
    {
      id: 1,
      image: "/images/winterwear-collection.jpg", // Replace with your actual image path
      title: "WINTERWEAR COLLECTION",
      subtitle: "BEST SERVED HOTTT",
      link: "/winterwear" // Add links for each card
    },
    {
      id: 2,
      image: "/images/joker-collection.jpg", // Replace with your actual image path
      title: "BUY 3 AT ₹999",
      subtitle: "The Joker Collection",
      link: "/offers/buy-3"
    },
    {
      id: 3,
      image: "/images/cartoon-collection.jpg", // Replace with your actual image path
      title: "BUY 2 AT ₹999",
      subtitle: "Cartoon Collection",
      link: "/offers/buy-2"
    },
    {
      id: 4,
      image: "/images/summer-specials.jpg", // Replace with your actual image path
      title: "SUMMER SPECIALS",
      subtitle: "Hot Deals",
      link: "/summer-collection"
    },
    {
      id: 5,
      image: "/images/new-arrivals.jpg", // Replace with your actual image path
      title: "NEW ARRIVALS",
      subtitle: "Fresh Collection",
      link: "/new-arrivals"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]); // Add cards.length here

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push(cards[index]);
    }
    return visibleCards;
  };

  return (
    <div className="w-full bg-white py-8"> {/* Changed bg-gray-100 to bg-white to match your design */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleCards().map((card, index) => (
              <a
                href={card.link}
                key={`${card.id}-${index}`}
                className="w-1/3 px-4 transform transition-all duration-500 cursor-pointer hover:opacity-90"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ width: '500px', height: '500px' }}>
                  <div className="relative aspect-[1/1]"> {/* Changed aspect ratio to 1:1 for square */}
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-bold text-lg">{card.title}</h3>
                      <p className="text-white/90 text-sm">{card.subtitle}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-4">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
