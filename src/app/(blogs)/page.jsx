import HeroSection from "./_components/heroSection";
import ArchitecturalSection from "./_components/ArchitecturalSection";
import ShowcaseSection from "./_components/ShowcaseSection";

export const metadata = {
  title: "خانه - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div className="py-10 lg:py-32">
      <HeroSection />
      <ArchitecturalSection />
      <ShowcaseSection />
    </div>
  );
}
