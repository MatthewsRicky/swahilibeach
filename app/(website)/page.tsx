import DiningPreview from "@/components/sections/home/DiningPreview";
import ExperiencesPreview from "@/components/sections/home/ExperiencesPreview";
import HeroSection from "@/components/sections/home/HeroSection";
import IntroductionSection from "@/components/sections/home/IntroductionSection";
import OffersPreview from "@/components/sections/home/OffersPreview";
import RoomsPreview from "@/components/sections/home/RoomsPreview"
import TestimonialSection from "@/components/sections/home/TestimonialSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroductionSection />
      <RoomsPreview />
      <ExperiencesPreview />
      <DiningPreview />
      <OffersPreview />
      <TestimonialSection />
    </main>
  );
}
