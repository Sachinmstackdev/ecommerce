"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";

interface CardData {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

const cards: CardData[] = [
  {
    id: 1,
    image: "/images/winterwear-collection.jpg",
    title: "WINTERWEAR COLLECTION",
    subtitle: "BEST SERVED HOTTT",
    link: "/winterwear"
  },
  {
    id: 2,
    image: "/images/joker-collection.jpg",
    title: "BUY 3 AT ₹999",
    subtitle: "The Joker Collection",
    link: "/offers/buy-3"
  },
  {
    id: 3,
    image: "/images/cartoon-collection.jpg",
    title: "BUY 2 AT ₹999",
    subtitle: "Cartoon Collection",
    link: "/offers/buy-2"
  },
  {
    id: 4,
    image: "/images/summer-specials.jpg",
    title: "SUMMER SPECIALS",
    subtitle: "Hot Deals",
    link: "/summer-collection"
  },
  {
    id: 5,
    image: "/images/new-arrivals.jpg",
    title: "NEW ARRIVALS",
    subtitle: "Fresh Collection",
    link: "/new-arrivals"
  }
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        x: `-${currentIndex * 33.333}%`,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  }, [currentIndex]);

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % cards.length;
      visibleCards.push(index);
    }
    return visibleCards;
  };

  return (
    <div className="relative w-full bg-white py-8 overflow-hidden">
      <div className="max-w-[95%] mx-auto">
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-5"
          >
            {cards.map((card, index) => (
              <Link
                href={card.link}
                key={card.id}
                className="w-[calc(33.333%-14px)] flex-shrink-0"
              >
                <div
                  ref={(el) => {
                    cardsRef.current[index] = el;
                  }}
                  className={`relative rounded-lg shadow-lg overflow-hidden transition-opacity duration-500 ${
                    getVisibleCards().includes(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ aspectRatio: '1/1' }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h3 className="text-white font-bold text-lg">{card.title}</h3>
                    <p className="text-white/90 text-sm">{card.subtitle}</p>
                  </div>
                </div>
              </Link>
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

export default HeroSection;
