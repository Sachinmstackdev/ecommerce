import React from 'react'
import Image from 'next/image'

interface Category {
  name: string
  slug: string
}

const categories: Category[] = [
  { name: "Oversized T-shirts", slug: "oversized-tshirts" },
  { name: "Hoodies", slug: "hoodies" },
  { name: "Joggers", slug: "joggers" },
  { name: "Jeans", slug: "jeans" },
  { name: "Classic Fit T-shirts", slug: "classic-fit-tshirts" },
  { name: "Full Sleeve T-shirts", slug: "full-sleeve-tshirts" },
  { name: "Sweatshirts", slug: "sweatshirts" },
  { name: "Cargos", slug: "cargos" },
  { name: "Sweaters", slug: "sweaters" },
  { name: "Pants", slug: "pants" },
  { name: "Pyjamas", slug: "pyjamas" },
  { name: "Jackets", slug: "jackets" },
]

export default function Component() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category - Women</h2>
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6" 
          style={{ 
            rowGap: '20px',
            columnGap: '1px'
          }}
        >
          {categories.map((category) => (
            <div key={category.slug} className="overflow-hidden border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-80">
              <div className="flex-grow p-0">
                <div className="relative w-full h-full">
                  <Image
                    src={`/api/placeholder.svg?height=300&width=300&text=${encodeURIComponent(category.name)}`}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
              <div className="h-20 flex items-center justify-center bg-white">
                <h3 className="text-sm font-medium text-gray-900 text-center px-2">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}