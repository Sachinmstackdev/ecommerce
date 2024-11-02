'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from "@/lib/utils"

interface Card {
  id: number
  image: string
  title: string
  subtitle: string
}

export default function Component() {
  const cards: Card[] = [
    {
      id: 1,
      image: "/placeholder.svg?height=600&width=400",
      title: "Statement Shirts",
      subtitle: "Starts At ₹449"
    },
    {
      id: 2,
      image: "/placeholder.svg?height=600&width=400",
      title: "Summer Collection",
      subtitle: "Under ₹599"
    },
    {
      id: 3,
      image: "/placeholder.svg?height=600&width=400",
      title: "Venom Merchandise",
      subtitle: "Official Collection"
    },
    {
      id: 4,
      image: "/placeholder.svg?height=600&width=400",
      title: "Marvel T-Shirts",
      subtitle: "Starting ₹499"
    },
    {
      id: 5,
      image: "/placeholder.svg?height=600&width=400",
      title: "DC Collection",
      subtitle: "Premium Range"
    },
    {
      id: 6,
      image: "/placeholder.svg?height=600&width=400",
      title: "Anime Series",
      subtitle: "New Arrivals"
    },
    {
      id: 7,
      image: "/placeholder.svg?height=600&width=400",
      title: "Graphic Tees",
      subtitle: "Best Sellers"
    },
    {
      id: 8,
      image: "/placeholder.svg?height=600&width=400",
      title: "Limited Edition",
      subtitle: "Exclusive Designs"
    }
  ]

  const [visibleCards, setVisibleCards] = useState([0, 1])
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true)
      
      setTimeout(() => {
        setVisibleCards(prev => [
          prev[1],
          (prev[1] + 1) % cards.length
        ])
        setTransitioning(false)
      }, 500) // Transition duration
    }, 5000) // Show duration

    return () => clearInterval(timer)
  }, [cards.length])

  const getCardStyle = (index: number) => {
    if (transitioning) {
      return index === 0 ? 'translate-x-[-100%] opacity-0' : 'translate-x-0'
    }
    return 'translate-x-0'
  }

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <div className="flex gap-4 absolute inset-0">
            {visibleCards.map((cardIndex, index) => (
              <div
                key={cards[cardIndex].id}
                className={cn(
                  "w-1/2 relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-500 ease-in-out",
                  getCardStyle(index)
                )}
              >
                <div className="relative h-full">
                  <Image
                    src={cards[cardIndex].image}
                    alt={cards[cardIndex].title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h2 className="text-3xl font-bold mb-2">{cards[cardIndex].title}</h2>
                    <p className="text-xl text-white/90">{cards[cardIndex].subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!transitioning) {
                  setTransitioning(true)
                  setTimeout(() => {
                    setVisibleCards([index, (index + 1) % cards.length])
                    setTransitioning(false)
                  }, 500)
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                visibleCards.includes(index)
                  ? "w-8 bg-gray-900" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}