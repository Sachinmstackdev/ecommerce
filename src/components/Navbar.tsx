'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
        items: [
          { name: 'T-Shirts', href: '/men/topwear/t-shirts' },
          { name: 'Printed T-Shirts', href: '/men/topwear/printed-t-shirts' },
          { name: 'Oversized T-shirts', href: '/men/topwear/oversized-t-shirts' },
          { name: 'Classic Fit T-shirts', href: '/men/topwear/classic-fit-t-shirts' },
          { name: 'Sweatshirts', href: '/men/topwear/sweatshirts' },
          { name: 'Plain T-Shirts', href: '/men/topwear/plain-t-shirts' },
          { name: 'Half Sleeve T-Shirts', href: '/men/topwear/half-sleeve-t-shirts' },
          { name: 'Polo T-Shirts', href: '/men/topwear/polo-t-shirts' },
          { name: 'Shirts', href: '/men/topwear/shirts' },
          { name: 'Co-ord Sets', href: '/men/topwear/co-ord-sets' },
          { name: 'Full Sleeve T-Shirts', href: '/men/topwear/full-sleeve-t-shirts' }
        ]
      },
      {
        name: 'Bottomwear',
        items: [
          { name: 'Joggers', href: '/men/bottomwear/joggers' },
          { name: 'Jeans', href: '/men/bottomwear/jeans' },
          { name: 'Baggy Jeans', href: '/men/bottomwear/baggy-jeans' },
          { name: 'Pajamas', href: '/men/bottomwear/pajamas' },
          { name: 'Cargos', href: '/men/bottomwear/cargos' },
          { name: 'Cargo Pants', href: '/men/bottomwear/cargo-pants' },
          { name: 'Trousers & Pants', href: '/men/bottomwear/trousers-pants' },
          { name: 'Parachute Pants', href: '/men/bottomwear/parachute-pants' },
          { name: 'Co-ord Sets', href: '/men/bottomwear/co-ord-sets' },
          { name: 'Shorts', href: '/men/bottomwear/shorts' },
          { name: 'Boxers', href: '/men/bottomwear/boxers' }
        ]
      },
      {
        name: 'Winterwear',
        items: [
          { name: 'Sweatshirts', href: '/men/winterwear/sweatshirts' },
          { name: 'Hoodies', href: '/men/winterwear/hoodies' },
          { name: 'Sweatshirts & Hoodies', href: '/men/winterwear/sweatshirts-hoodies' },
          { name: 'Jackets', href: '/men/winterwear/jackets' },
          { name: 'Sweaters', href: '/men/winterwear/sweaters' },
          { name: 'Joggers', href: '/men/winterwear/joggers' },
          { name: 'Plus Size', href: '/men/winterwear/plus-size' }
        ]
      },
      {
        name: 'Footwear',
        items: [
          { name: 'Bewakoof Sneakers', href: '/men/footwear/bewakoof-sneakers' },
          { name: 'Sliders', href: '/men/footwear/sliders' },
          { name: 'Casual Shoes', href: '/men/footwear/casual-shoes' }
        ]
      },
      {
        name: 'Accessories',
        items: [
          { name: 'Mobile covers', href: '/men/accessories/mobile-covers' },
          { name: 'Backpacks', href: '/men/accessories/backpacks' },
          { name: 'Sunglasses', href: '/men/accessories/sunglasses' },
          { name: 'Sling bags', href: '/men/accessories/sling-bags' },
          { name: 'Caps', href: '/men/accessories/caps' },
          { name: 'Mobile Card-holder', href: '/men/accessories/mobile-card-holder' }
        ]
      },
      {
        name: 'Top Sellers',
        items: [
          { name: 'Top 150 T-Shirts', href: '/men/top-sellers/top-150-t-shirts' },
          { name: 'Top 20 Cargos', href: '/men/top-sellers/top-20-cargos' }
        ]
      }
    ]
  },
  {
    title: 'WOMEN',
    href: '/women',
    categories: [
      {
        name: 'Topwear',
        items: [
          { name: 'T-Shirts', href: '/women/topwear/t-shirts' },
          { name: 'Printed T-Shirts', href: '/women/topwear/printed-t-shirts' },
          { name: 'Boyfriend T-Shirts', href: '/women/topwear/boyfriend-t-shirts' },
          { name: 'Oversized T-Shirts', href: '/women/topwear/oversized-t-shirts' },
          { name: 'Classic Fit T-Shirts', href: '/women/topwear/classic-fit-t-shirts' },
          { name: 'Sweatshirts', href: '/women/topwear/sweatshirts' },
          { name: 'Plain T-Shirts', href: '/women/topwear/plain-t-shirts' },
          { name: 'Full Sleeve T-Shirts', href: '/women/topwear/full-sleeve-t-shirts' },
          { name: 'Half Sleeves T-Shirts', href: '/women/topwear/half-sleeves-t-shirts' },
          { name: 'Fashion Tops', href: '/women/topwear/fashion-tops' },
          { name: 'Co-ord Sets', href: '/women/topwear/co-ord-sets' }
        ]
      },
      {
        name: 'Bottomwear',
        items: [
          { name: 'Joggers', href: '/women/bottomwear/joggers' },
          { name: 'Jeans', href: '/women/bottomwear/jeans' },
          { name: 'Baggy Jeans', href: '/women/bottomwear/baggy-jeans' },
          { name: 'Parachute pants', href: '/women/bottomwear/parachute-pants' },
          { name: 'Cargos', href: '/women/bottomwear/cargos' },
          { name: 'Cargo Pants', href: '/women/bottomwear/cargo-pants' },
          { name: 'Co-ord Sets', href: '/women/bottomwear/co-ord-sets' },
          { name: 'Pajamas', href: '/women/bottomwear/pajamas' },
          { name: 'Trousers & Pants', href: '/women/bottomwear/trousers-pants' },
          { name: 'Shorts', href: '/women/bottomwear/shorts' },
          { name: 'Plus Size Bottomwear', href: '/women/bottomwear/plus-size-bottomwear' }
        ]
      },
      {
        name: 'Winterwear',
        items: [
          { name: 'Sweatshirts', href: '/women/winterwear/sweatshirts' },
          { name: 'Hoodies', href: '/women/winterwear/hoodies' },
          { name: 'Sweatshirts & Hoodies', href: '/women/winterwear/sweatshirts-hoodies' },
          { name: 'Sweaters', href: '/women/winterwear/sweaters' },
          { name: 'Jackets', href: '/women/winterwear/jackets' },
          { name: 'Joggers', href: '/women/winterwear/joggers' },
          { name: 'Plus Size', href: '/women/winterwear/plus-size' }
        ]
      },
      {
        name: 'Footwear',
        items: [
          { name: 'Casual Shoes', href: '/women/footwear/casual-shoes' },
          { name: 'Sliders', href: '/women/footwear/sliders' },
          { name: 'Sneakers', href: '/women/footwear/sneakers' }
        ]
      },
      {
        name: 'Accessories',
        items: [
          { name: 'Mobile Covers', href: '/women/accessories/mobile-covers' },
          { name: 'Bags & Backpacks', href: '/women/accessories/bags-backpacks' },
          { name: 'Sling bags', href: '/women/accessories/sling-bags' },
          { name: 'Sunglasses', href: '/women/accessories/sunglasses' },
          { name: 'Caps', href: '/women/accessories/caps' },
          { name: 'Mobile Card-holder', href: '/women/accessories/mobile-card-holder' }
        ]
      },
      {
        name: 'Top Sellers',
        items: [
          { name: 'Top 100 T-Shirts', href: '/women/top-sellers/top-100-t-shirts' },
          { name: 'Top 20 Bottoms', href: '/women/top-sellers/top-20-bottoms' }
        ]
      }
    ]
  },
  {
    title: 'MOBILE COVERS',
    href: '/mobile-covers',
    categories: [
      {
        name: 'Popular Brands',
        items: [
          { name: 'iPhone', href: '/mobile-covers/popular-brands/iphone' },
          { name: 'Samsung', href: '/mobile-covers/popular-brands/samsung' },
          { name: 'OnePlus', href: '/mobile-covers/popular-brands/oneplus' },
          { name: 'Realme', href: '/mobile-covers/popular-brands/realme' },
          { name: 'Xiaomi', href: '/mobile-covers/popular-brands/xiaomi' },
          { name: 'Vivo', href: '/mobile-covers/popular-brands/vivo' }
        ]
      },
      {
        name: 'Other Brands',
        items: [
          { name: 'Google', href: '/mobile-covers/other-brands/google' },
          { name: 'Oppo', href: '/mobile-covers/other-brands/oppo' },
          { name: 'Nokia', href: '/mobile-covers/other-brands/nokia' },
          { name: 'Motorola', href: '/mobile-covers/other-brands/motorola' },
          { name: 'Poco', href: '/mobile-covers/other-brands/poco' },
          { name: 'Infinix', href: '/mobile-covers/other-brands/infinix' }
        ]
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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setActiveDropdown(title)
    const underlineRef = underlineRefs.current[title]
    if (underlineRef) {
      gsap.to(underlineRef, { scaleX: 1, duration: 0.3, ease: 'power2.out' })
    }
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
      Object.values(underlineRefs.current).forEach(ref => {
        if (ref) {
          
          gsap.to(ref, { scaleX: 0, duration: 0.1, ease: 'power2.in' })
        }
      })
    }, 200)
  }

  const cancelCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
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
                  {item.icon && <item.icon className="h-4 w-4  mr-1" />}
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
                    ref={(el) => { underlineRefs.current[item.title] = el; }}
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
          onMouseEnter={() => {
            cancelCloseTimeout()
            setActiveDropdown(activeDropdown)
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-h-[50vh] overflow-y-auto">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-8 grid grid-cols-4 gap-6">
                  {mainNavItems
                    .find(item => item.title === activeDropdown)
                    ?.categories
                    .slice(0, 4)
                    .map((category) => (
                      <div key={category.name} className="min-h-0">
                        <h3 className="font-semibold text-gray-900 mb-3">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item) => (
                            <li key={item.name}>
                              <Link 
                                href={item.href} 
                                className="text-sm text-gray-600 hover:text-gray-900 block"
                              >
                                <button className="w-full text-left py-1 px-2 rounded hover:bg-gray-50 transition duration-150 ease-in-out">
                                  {item.name}
                                </button>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </div>
                {activeDropdown !== 'MOBILE COVERS' && (
                  <div className="col-span-4">
                    <h3 className="font-semibold text-gray-900 mb-3">SPECIALS</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {specialItems.map((item) => (
                        <Link 
                          key={item.name} 
                          href={`/specials/${item.name.toLowerCase().replace(/ /g, '-')}`} 
                          className="text-center group"
                        >
                          <div className="aspect-square relative bg-gray-100 rounded-lg mb-2 overflow-hidden">
                            <Image 
                              src={item.image} 
                              alt={item.name} 
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <span className="text-xs text-gray-600 group-hover:text-gray-900">{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Bar */}
      <div className="bg-gray-100 hidden md:block">
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
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100"
                          >
                            <button className="w-full text-left">
                              {subItem.name}
                            </button>
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
