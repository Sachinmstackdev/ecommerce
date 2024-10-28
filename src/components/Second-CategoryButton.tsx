import React from 'react'
import Link from 'next/link'

interface CategoryButton {
  name: string
  slug: string
}

const categories: CategoryButton[] = [
  { name: "Shirts", slug: "shirts" },
  { name: "Sliders", slug: "sliders" }
]

export default function Component() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              key={category.slug}
              className="relative block w-full h-80 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Image for {category.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h2 className="text-2xl font-bold text-white">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
