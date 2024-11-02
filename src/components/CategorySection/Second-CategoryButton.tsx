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

export default function SecondCategoryButton() {
  return (
    <section className="w-full py-4 bg-white">
      <div className="container mx-auto px-2" style={{ maxWidth: '800px' }}>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Link 
              href={`/category/${category.slug}`} 
              key={category.slug}
              className="relative block w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              passHref
            >
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-sm">Image for {category.name}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                <h2 className="text-lg font-bold text-white">{category.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}