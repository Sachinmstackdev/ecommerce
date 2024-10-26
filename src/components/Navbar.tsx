'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, X, Search, User, ShoppingCart, Heart, MapPin, Download, Phone, Truck, ChevronDown } from 'lucide-react'
import gsap from 'gsap'

const topBarItems = [
  { name: 'Offers', href: '/offers', icon: null },
  { name: 'Fanbook', href: '/fanbook', icon: null },
  { name: 'Download App', href: '/download', icon: Download },
  { name: 'Find a store near me', href: '/stores', icon: MapPin },
]

const mainNavItems = [
  {
    title: 'MEN',
    href: '/men',
    categories: [
      {
        name: 'Topwear',
        items: ['T-Shirts', 'Printed T-Shirts', 'Oversized T-shirts', 'Classic Fit T-shirts', 'Sweatshirts', 'Plain T-Shirts', 'Half Sleeve T-Shirts', 'Polo T-Shirts', 'Shirts', 'Co-ord Sets', 'Full Sleeve T-Shirts']
      },
      {
        name: 'Bottomwear',
        items: ['Joggers', 'Jeans', 'Baggy Jeans', 'Pajamas', 'Cargos', 'Cargo Pants', 'Trousers & Pants', 'Parachute Pants', 'Co-ord Sets', 'Shorts', 'Boxers']
      },
      {
        name: 'Winterwear',
        items: ['Sweatshirts', 'Hoodies', 'Sweatshirts & Hoodies', 'Jackets', 'Sweaters', 'Joggers', 'Plus Size']
      },
      {
        name: 'Footwear',
        items: ['Bewakoof Sneakers', 'Sliders', 'Casual Shoes']
      },
      {
        name: 'Accessories',
        items: ['Mobile covers', 'Backpacks', 'Sunglasses', 'Sling bags', 'Caps', 'Mobile Card-holder']
      },
      {
        name: 'Top Sellers',
        items: ['Top 150 T-Shirts', 'Top 20 Cargos']
      }
    ]
  },
  {
    title: 'WOMEN',
    href: '/women',
    categories: [
      {
        name: 'Topwear',
        items: ['T-Shirts', 'Printed T-Shirts', 'Boyfriend T-Shirts', 'Oversized T-Shirts', 'Classic Fit T-Shirts', 'Sweatshirts', 'Plain T-Shirts', 'Full Sleeve T-Shirts', 'Half Sleeves T-Shirts', 'Fashion Tops', 'Co-ord Sets']
      },
      {
        name: 'Bottomwear',
        items: ['Joggers', 'Jeans', 'Baggy Jeans', 'Parachute pants', 'Cargos', 'Cargo Pants', 'Co-ord Sets', 'Pajamas', 'Trousers & Pants', 'Shorts', 'Plus Size Bottomwear']
      },
      {
        name: 'Winterwear',
        items: ['Sweatshirts', 'Hoodies', 'Sweatshirts & Hoodies', 'Sweaters', 'Jackets', 'Joggers', 'Plus Size']
      },
      {
        name: 'Footwear',
        items: ['Casual Shoes', 'Sliders', 'Sneakers']
      },
      {
        name: 'Accessories',
        items: ['Mobile Covers', 'Bags & Backpacks', 'Sling bags', 'Sunglasses', 'Caps', 'Mobile Card-holder']
      },
      {
        name: 'Top Sellers',
        items: ['Top 100 T-Shirts', 'Top 20 Bottoms']
      }
    ]
  },
  {
    title: 'MOBILE COVERS',
    href: '/mobile-covers',
    categories: [
      {
        name: 'Popular Brands',
        items: ['iPhone', 'Samsung', 'OnePlus', 'Realme', 'Xiaomi', 'Vivo']
      },
      {
        name: 'Other Brands',
        items: ['Google', 'Oppo', 'Nokia', 'Motorola', 'Poco', 'Infinix']
      }
    ]
  }
]

const specialItems = [
  { name: 'Mad Diwali Sale', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Early Winter Favorites', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Bewakoof Special Deadpool & Wolverine', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Bewakoof Sneakers', image: '/placeholder.svg?height=100&width=100' },
  { name: 'Bewakoof Air', image: '/placeholder.svg?height=100&width=100' },
  { name: 'One Piece Collection', image: '/placeholder.svg?height=100&width=100' }
]

const categoryBarItems = [
  'DEALS HUB',
  'MEN',
  'WOMEN',
  'WINTERWEAR',
  'ACCESSORIES',
  'SNEAKERS',
  'BEWAKOOF AIR',
  'HEAVY DUTY',
  'CUSTOMIZATION'
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>(null)
  const underlineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const router = useRouter()

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title)
    const underlineRef = underlineRefs.current[title]
    if (underlineRef) {
      gsap.to(underlineRef, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
    }
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
    Object.values(underlineRefs.current).forEach(ref => {
      if (ref) {
        gsap.to(ref, { scaleX: 0, duration: 0.3, ease: 'power2.in' })
      }
    })
  }

  const toggleMobileCategory = (title: string) => {
    setActiveMobileCategory(activeMobileCategory === title ? null : title)
  }

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-4">
              {topBarItems.map((item) => (
                <Link key={item.name} href={item.href} className="text-xs text-gray-600 hover:text-gray-900 flex items-center">
                  {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-xs text-gray-600 hover:text-gray-900 flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                Contact Us
              </Link>
              <Link href="/track-order" className="text-xs text-gray-600 hover:text-gray-900 flex items-center">
                <Truck className="h-4 w-4 mr-1" />
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.svg" alt="Bewakoof" width={120} height={40} />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {mainNavItems.map((item) => (
                <div
                  key={item.title}
                  className="relative inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.href} className="hover:text-gray-700">
                    {item.title}
                  </Link>
                  <div
                    ref={(el) => { underlineRefs.current[item.title] = el; }} // Updated to not return el
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform origin-left scale-x-0"
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by products"
                  className="w-64 py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-md focus:outline-none focus:bg-white focus:ring-1 focus:ring-indigo-500"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <div className="hidden md:ml-4 md:flex md:items-center">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                LOGIN
              </button>
              <button className="ml-4 text-gray-400 hover:text-gray-500">
                <Heart className="h-6 w-6" />
              </button>
              <button className="ml-4 text-gray-400 hover:text-gray-500">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <Search className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <Heart className="h-6 w-6" />
            </button>
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menus */}
      {activeDropdown && (
        <div
          className="absolute left-0 w-full bg-white shadow-lg z-10 py-4 hidden md:block"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-6 gap-6">
              {mainNavItems.find(item => item.title === activeDropdown)?.categories.map((category, index) => (
                <div key={category.name} className={index >= 4 ? 'col-span-2' : 'col-span-1'}>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item}>
                        <Link href={`/${activeDropdown.toLowerCase()}/${category.name.toLowerCase()}/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm hover:text-primary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {activeDropdown !== 'MOBILE COVERS' && (
                <div className="col-span-2">
                  <h3 className="font-semibold mb-2">SPECIALS</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {specialItems.map((item) => (
                      <Link key={item.name} href={`/specials/${item.name.toLowerCase().replace(/ /g, '-')}`} className="text-center">
                        <Image src={item.image} alt={item.name} width={100} height={100} className="mx-auto mb-2 rounded-full" />
                        <span className="text-xs">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category Bar */}
      <div className="bg-gray-100 hidden  md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 overflow-x-auto">
            {categoryBarItems.map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(/ \s+/g, '-')}`} className="text-xs font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleMobileCategory(item.title)}
                  className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300"
                >
                  {item.title}
                  <ChevronDown className={`h-5 w-5 transform ${activeMobileCategory === item.title ? 'rotate-180' : ''}`} />
                </button>
                {activeMobileCategory === item.title && (
                  <div className="pl-6 space-y-1">
                    {item.categories.map((category) => (
                      <div key={category.name}>
                        <h4 className="font-medium text-sm text-gray-900 mt-2">{category.name}</h4>
                        {category.items.map((subItem) => (
                          <Link
                            key={subItem}
                            href={`/${item.title.toLowerCase()}/${category.name.toLowerCase()}/${subItem.toLowerCase().replace(/ /g, '-')}`}
                            className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4">
              <div className="flex-shrink-0">
                <User className="h-10 w-10 rounded-full" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">User Name</div>
                <div className="text-sm font-medium text-gray-500">user@example.com</div>
              </div>
            </div>
            <div className="mt-3 space-y-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Your Profile
              </Link>
              <Link
                href="/settings"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
              >
                Sign out
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
