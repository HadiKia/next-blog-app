import {
  CircleStackIcon,
  LockClosedIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    id: 1,
    title: "جریان احراز هویت مبتنی بر توکن",
    description:
      "پیاده‌سازی چرخه Access / Refresh Token با مدیریت انقضا، همگام‌سازی وضعیت ورود در سطح اپلیکیشن و محافظت از مسیرهای حساس.",
    Icon: LockClosedIcon,
  },
  {
    id: 2,
    title: "معماری ماژولار کامپوننت‌ها",
    description:
      "ساختاردهی کامپوننت‌ها بر پایه تفکیک مسئولیت‌ها و قابلیت استفاده مجدد، همراه با سازمان‌دهی پوشه‌ها به‌صورت مقیاس‌پذیر و قابل نگهداری.",
    Icon: PuzzlePieceIcon,
  },
  {
    id: 3,
    title: "مدیریت داده و لایه ارتباط با API",
    description:
      "مدیریت دریافت و کشینگ داده با React Query، جداسازی لایه API و پیاده‌سازی به‌روزرسانی خوش‌بینانه برای بهبود تجربه کاربری.",
    Icon: CircleStackIcon,
  },
  {
    id: 4,
    title: "کنترل دسترسی نقش‌محور",
    description:
      "کنترل نمایش و دسترسی در سطح Route و Component جهت جلوگیری از دسترسی غیرمجاز و تفکیک سطح کاربر و ادمین.",
    Icon: ShieldCheckIcon,
  },
  {
    id: 5,
    title: "سیستم مدیریت محتوای ادمین",
    description:
      "پیاده‌سازی رابط کاربری مدیریت بلاگ، دسته‌بندی و کامنت با ساختار CRUD استاندارد و تجربه کاربری ساختاریافته.",
    Icon: UserIcon,
  },
  {
    id: 6,
    title: "طراحی واکنش‌گرا و پشتیبانی از تم",
    description:
      "طراحی کاملا ریسپانسیو مبتنی بر رویکرد Mobile-First همراه با پیاده‌سازی تم تاریک و روشن و حفظ وضعیت انتخاب کاربر.",
    Icon: SparklesIcon,
  },
];

const ArchitecturalSection = () => {
  return (
    <div className="mb-16 lg:mb-44 flex flex-col gap-10 lg:gap-20 xl:gap-32 lg:flex-row lg:items-center">
      <div className="lg:max-w-[500px]">
        <h2 className="font-bold text-2xl lg:text-3xl text-secondary-700 mb-3 lg:mb-4">
          معماری و قابلیت‌های کلیدی پروژه
        </h2>
        <p className="text-secondary-500 text-base lg:text-lg mb-4 text-justify">
          این پروژه با رویکرد معماری‌محور در لایه فرانت‌اند توسعه داده شده است.
          ساختار ماژولار کامپوننت‌ها، لایه‌بندی ارتباط با API، مدیریت داده مبتنی
          بر React Query و پیاده‌سازی جریان کامل Access/Refresh Token، بستری
          مقیاس‌پذیر و قابل نگهداری ایجاد کرده است. تمرکز اصلی بر جداسازی
          مسئولیت‌ها، بهینه‌سازی تجربه کاربری و تضمین امنیت در سطح رابط کاربری
          بوده است.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
        {features.map(({ id, title, description, Icon }) => (
          <div
            key={id}
            className="flex flex-col p-4 lg:p-5 border border-secondary-200 bg-secondary-0 rounded-xl shadow-lg animate-fade"
          >
            <div className="flex items-center gap-x-2 mb-3">
              {Icon && (
                <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-secondary-600 mb-1" />
              )}
              <h6 className="text-secondary-600 font-semibold text-base">
                {title}
              </h6>
            </div>

            <p className="text-secondary-400 text-sm text-start ">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchitecturalSection;
