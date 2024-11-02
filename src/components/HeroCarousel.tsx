'use client'

import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

type Card = {
  id: number
  title: string
}

const cardData: Card[] = [
  { id: 1, title: 'Card 1' },
  { id: 2, title: 'Card 2' },
  { id: 3, title: 'Card 3' },
  { id: 4, title: 'Card 4' },
  { id: 5, title: 'Card 5' },
]

export default function Carousel() {
  const [visibleCards, setVisibleCards] = useState<Card[]>(cardData.slice(0, 3))
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const animateCarousel = () => {
    if (isAnimating || !carouselRef.current) return

    setIsAnimating(true)

    const cards = carouselRef.current.children
    const cardWidth = cards[0].getBoundingClientRect().width

    gsap.to(cards[0], {
      x: -cardWidth,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setVisibleCards((prev) => {
          const nextCardIndex = (cardData.findIndex((card) => card.id === prev[2].id) + 1) % cardData.length
          const newCards = [...prev.slice(1), cardData[nextCardIndex]]
          return newCards.length === 3 ? newCards : cardData.slice(0, 3)
        })
        setIsAnimating(false)
      },
    })

    gsap.to(cards[1], { x: -cardWidth, duration: 0.5 })
    gsap.to(cards[2], { x: -cardWidth, duration: 0.5 })
  }

  useEffect(() => {
    const interval = setInterval(animateCarousel, 3000) // Change cards every 3 seconds
    return () => clearInterval(interval)
  }, [animateCarousel])

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Carousel</h2>
      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex transition-all duration-500 ease-in-out">
          {visibleCards.map((card, index) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
              style={{ transform: `translateX(${index * 100}%)` }}
            >
              <div className="bg-white rounded-lg shadow-md p-4 h-48 flex items-center justify-center">
                <h3 className="text-xl font-semibold">{card.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}