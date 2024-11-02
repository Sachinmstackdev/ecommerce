'use client'

import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"
import { useRouter } from 'next/navigation'

// Button Component
const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(({
  className,
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full w-12 h-12 bg-white/40 shadow-lg transition-all hover:bg-white/70",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

interface Product {
  id: number
  image: string
  tag: string
  name: string
  price: string
}

export default function Component() {
  const router = useRouter()

  // In a real app, this would come from your backend/CMS
  const backgroundImage = "/placeholder.svg?height=500&width=1920"

  const allProducts: Product[] = [
    // First group (1-5)
    { id: 1, image: "/placeholder.svg?height=400&width=300", tag: "BUY 3 FOR 999", name: "Black Joggers", price: "₹999" },
    { id: 2, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Japanese Print Sweatshirt", price: "₹799" },
    { id: 3, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Pattern T-Shirt", price: "₹599" },
    { id: 4, image: "/placeholder.svg?height=400&width=300", tag: "PLUS SIZE", name: "Marvel T-Shirt", price: "₹699" },
    { id: 5, image: "/placeholder.svg?height=400&width=300", tag: "NEW ARRIVAL", name: "Batman T-Shirt", price: "₹899" },
    // Second group (6-10)
    { id: 6, image: "/placeholder.svg?height=400&width=300", tag: "BUY 3 FOR 999", name: "Product 6", price: "₹999" },
    { id: 7, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 7", price: "₹799" },
    { id: 8, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 8", price: "₹599" },
    { id: 9, image: "/placeholder.svg?height=400&width=300", tag: "PLUS SIZE", name: "Product 9", price: "₹699" },
    { id: 10, image: "/placeholder.svg?height=400&width=300", tag: "NEW ARRIVAL", name: "Product 10", price: "₹899" },
    // Third group (11-15)
    { id: 11, image: "/placeholder.svg?height=400&width=300", tag: "BUY 3 FOR 999", name: "Product 11", price: "₹999" },
    { id: 12, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 12", price: "₹799" },
    { id: 13, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 13", price: "₹599" },
    { id: 14, image: "/placeholder.svg?height=400&width=300", tag: "PLUS SIZE", name: "Product 14", price: "₹699" },
    { id: 15, image: "/placeholder.svg?height=400&width=300", tag: "NEW ARRIVAL", name: "Product 15", price: "₹899" },
    // Fourth group (16-20)
    { id: 16, image: "/placeholder.svg?height=400&width=300", tag: "BUY 3 FOR 999", name: "Product 16", price: "₹999" },
    { id: 17, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 17", price: "₹799" },
    { id: 18, image: "/placeholder.svg?height=400&width=300", tag: "BUY 2 FOR 999", name: "Product 18", price: "₹599" },
    { id: 19, image: "/placeholder.svg?height=400&width=300", tag: "PLUS SIZE", name: "Product 19", price: "₹699" },
    { id: 20, image: "/placeholder.svg?height=400&width=300", tag: "NEW ARRIVAL", name: "Product 20", price: "₹899" },
  ]

  const [currentPage, setCurrentPage] = useState(0)
  const productsPerPage = 5
  const totalPages = Math.ceil(allProducts.length / productsPerPage)

  const currentProducts = allProducts.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const handleExploreAll = () => {
    router.push('/products/all?category=savings')
  }

  return (
    <div className="relative w-full min-h-[500px] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={backgroundImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-95"
        />
        {/* Overlay for better card visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-lg">
          SAVINGS ZONE
        </h2>
        
        <div className="relative px-16">
          <div className="flex gap-4 justify-center">
            {currentProducts.map((product) => (
              <div key={product.id} className="w-[260px] flex-shrink-0">
                <div className="relative bg-white rounded-xl overflow-hidden group cursor-pointer shadow-lg">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-green-500 text-white text-base px-4 py-1.5 rounded-md">
                      {product.tag}
                    </span>
                  </div>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-xl font-bold text-gray-900">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevPage}
            className="absolute -left-8 top-1/2 -translate-y-1/2 z-20 backdrop-blur-sm"
            aria-label="Previous products"
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            onClick={nextPage}
            className="absolute -right-8 top-1/2 -translate-y-1/2 z-20 backdrop-blur-sm"
            aria-label="Next products"
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                currentPage === index 
                  ? "w-4 bg-white" 
                  : "bg-white/50 hover:bg-white/75"
              )}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Updated Explore All button */}
        <div className="flex justify-center mt-8 mb-6">
          <button
            className="text-white text-lg font-medium hover:text-gray-200 transition-colors duration-200 flex items-center gap-2 group"
            onClick={handleExploreAll}
            aria-label="View all products"
          >
            Explore All
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  )
}