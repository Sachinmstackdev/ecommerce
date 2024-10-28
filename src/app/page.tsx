import HeroSection from '../components/HeroSection'; 
import CategorySelector from '../components/Categorybutton';
import CategoryGrid from '../components/CategoryGrid';
import SecondCategoryButton from '../components/Second-CategoryButton';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      
      <HeroSection />
      <CategorySelector />
      <CategoryGrid />
      <SecondCategoryButton />
    </div>
  )
}

