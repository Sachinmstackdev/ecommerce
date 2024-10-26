import HeroCarousel from '../components/HeroCarousel' // Ensure this file exists
//import FeaturedProducts from '../components/FeaturedProducts'
//import CategoryGrid from './components/CategoryGrid'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroCarousel />
      {/* <FeaturedProducts />
      <CategoryGrid /> */}
    </div>
  )
}
