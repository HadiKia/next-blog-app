import HeroSection from "./_components/heroSection";
import ArchitecturalSection from "./_components/ArchitecturalSection";
import ShowcaseSection from "./_components/ShowcaseSection";
import TechStackSection from "./_components/TechStackSection";

export const metadata = {
  title: "خانه - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div className="py-10 lg:py-32">
      <HeroSection />
      <ArchitecturalSection />
      <ShowcaseSection />
      <TechStackSection />
    </div>
  );
}
