import FeaturedProducts from "@/components/modules/home/FeaturedProducts";
import HeroSection from "@/components/modules/home/HeroSection";
import RentalTips from "@/components/modules/home/RentalTips/RentalTips";
import Testimonials from "@/components/modules/home/Testimonials/Testimonials";

const HomePage = async () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />
      <RentalTips />
      <Testimonials />
    </div>
  );
};

export default HomePage;
