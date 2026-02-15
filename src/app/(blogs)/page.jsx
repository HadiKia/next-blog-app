import HeroSection from "./_components/heroSection";
import OverviewSection from "./_components/OverviewSection";

export const metadata = {
  title: "خانه - وب اپلیکیشن مدیریت بلاگ",
};

export default function Home() {
  return (
    <div className="py-10 lg:py-20">
      <HeroSection />
      <OverviewSection />
    </div>
  );
}
