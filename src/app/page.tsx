import HeroSection from '../components/HeroSection'; 
import CategorySelector from '../components/CategorySection/Categorybutton';
import CategoryGrid from '../components/CategoryGrid';
import SecondCategoryButton from '../components/CategorySection/Second-CategoryButton';
import CategoryGrid_2nd from '../components/CategoryGrid_2nd';
import FourCards_CategoryButton from '../components/CategorySection/FourCards_CategoryButton';
import CoverImage from '../components/offers/CoverImage';
import OfferProductsShowcase from '../components/offers/OfferProductsShowcase';
import OfferProductsShowcase2 from '../components/offers/OfferProductsShowcase2';
import OfferProductsShowcase3 from '../components/offers/OfferProductsShowcase3';
import AutoSlideCards from '../components/CategorySection/auto_slidecards';
import OfferProductsShowcase4 from '../components/offers/OfferProductsShowcase4';
import SlideSquareCards from '../components/offers/slidesquarecards';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      
      <HeroSection />
      <CategorySelector />
      <CategoryGrid />
      <SecondCategoryButton />
      <CategoryGrid_2nd />
      <FourCards_CategoryButton />
      <CoverImage />
      <OfferProductsShowcase />
      <OfferProductsShowcase2 />
      <OfferProductsShowcase3 />
      <AutoSlideCards />
      <OfferProductsShowcase4 />
      <SlideSquareCards />
      <Footer />
    </div>
  )
}

