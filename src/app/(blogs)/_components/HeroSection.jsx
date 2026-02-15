import Button from "@/ui/Button";
import Image from "next/image";
import Link from "next/link";

const badges = [
  {
    id: 1,
    title: "Next.js 15",
  },
  {
    id: 2,
    title: "React 19",
  },
  {
    id: 3,
    title: "React Query",
  },
  {
    id: 4,
    title: "REST API Integration",
  },
  {
    id: 5,
    title: "Access / Refresh Token",
  },
  {
    id: 6,
    title: "Role-Based Routing",
  },
  {
    id: 7,
    title: "Tailwind CSS",
  },
  {
    id: 8,
    title: "Dark Mode",
  },
];

const HeroSection = () => {
  return (
    <div className="mb-10 lg:mb-20 flex flex-col gap-10 lg:gap-20 lg:flex-row lg:items-center">
      <div className="lg:max-w-[500px]">
        <h1 className="font-bold text-3xl lg:text-4xl text-secondary-700 mb-4">
          پلتفرم جامع مدیریت بلاگ
        </h1>
        <p className="text-secondary-500 text-base lg:text-lg mb-4 text-justify">
          پلتفرم مدیریت بلاگ با احراز هویت نقش‌محور و معماری توکن امن، همراه با
          پنل ادمین، داشبورد کاربری، جستجو و فیلتر پیشرفته و رابط کاربری
          ریسپانسیو با تم تاریک.
        </p>
        <div className="flex items-center flex-wrap gap-2 mb-10">
          {badges.map((badge) => (
            <div key={badge.id} className="badge badge--secondary">
              {badge.title}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-y-3">
          <Button variant="primary" className="w-full">
            <Link href="/blogs">مطالعه بلاگ‌ها</Link>
          </Button>
          <Button variant="outline" className="w-full">
            <Link
              target="_blank"
              href="/https://github.com/HadiKia/next-blog-app"
            >
              گیت‌هاب پروژه
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full">
        <div className="relative aspect-[16.5/10] w-full animate-fade">
          <Image
            fill
            alt="banner"
            src="/images/hero-section-banner.png"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
