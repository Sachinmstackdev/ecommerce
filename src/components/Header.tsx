'use client'

import Link from 'next/link'
import { useGSAP } from '../hooks/useGSAP' // Adjust the path as necessary

export default function Header() {
  useGSAP()

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Bewakoof</Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/men" className="nav-item">MEN</Link>
          <Link href="/women" className="nav-item">WOMEN</Link>
          <Link href="/mobile-covers" className="nav-item">MOBILE COVERS</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search products" className="p-2 border rounded" />
          <button className="nav-item">LOGIN</button>
          <button className="nav-item">❤️</button>
          <button className="nav-item">🛒</button>
        </div>
      </div>
    </header>
  )
}
