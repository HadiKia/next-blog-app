import {
  DocumentTextIcon,
  MoonIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const ShowcaseSection = () => {
  return (
    <div className="mb-16 lg:mb-40 flex flex-col gap-20 lg:gap-40">
      <div className="flex flex-col-reverse gap-20 lg:flex-row md:items-center lg:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-col lg:gap-10 max-w-[500px]">
          <div>
            <div className="flex items-center gap-x-2 mb-3 lg:mb-4">
              <DocumentTextIcon className="w-6 h-6 lg:w-7 lg:h-7 text-secondary-700" />
              <h6 className="text-secondary-700 text-2xl xl:text-3xl font-bold">
                صفحه لیست بلاگ‌ها
              </h6>
            </div>
            <p className="text-secondary-500 text-base lg:text-lg text-justify">
              نمایش بهینه لیست مقالات با رویکرد Server-First در App Router،
              همراه با جستجو، فیلتر و صفحه‌بندی مبتنی بر URL برای حفظ سازگاری با
              SEO و اشتراک‌گذاری وضعیت صفحه.
            </p>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Rendering Strategy
            </h6>

            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Server-side Data Fetching در App Router</li>
              <li>تولید صفحه بهینه برای SEO</li>
              <li>همگام‌سازی state با searchParams</li>
            </ul>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Search & Filtering
            </h6>
            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Debounced Search با بروزرسانی Query String</li>
              <li>Sort و Pagination مبتنی بر URL</li>
              <li>امکان اشتراک‌گذاری وضعیت فیلترها</li>
            </ul>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Performance & UX
            </h6>
            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Suspense-based loading strategy</li>
              <li>Skeleton Loading برای جلوگیری از layout shift</li>
              <li>تفکیک Server Components و Client Controls</li>
            </ul>
          </div>
        </div>

        <div className="w-full mx-auto lg:mx-0">
          <div className="relative aspect-[5/4] w-full animate-fade drop-shadow-2xl">
            <Image
              fill
              alt="blog list desktop"
              src="/images/blog-list-browser.png"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row lg:items-center md:items-center">
        <div className="w-full max-w-[200px] mx-auto  lg:max-w-xs">
          <div className="relative aspect-[9/16] w-full animate-fade drop-shadow-2xl">
            <Image
              fill
              alt="blog details mobile"
              src="/images/blog-details-mobile.png"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-col lg:gap-10 max-w-[500px] lg:mx-auto">
          <div>
            <div className="flex items-center gap-x-2 mb-3 lg:mb-4">
              <DocumentTextIcon className="w-6 h-6 lg:w-7 lg:h-7 text-secondary-700" />
              <h6 className="text-secondary-700 text-2xl xl:text-3xl font-bold">
                صفحه جزئیات بلاگ
              </h6>
            </div>
            <p className="text-secondary-500 text-base lg:text-lg text-justify">
              نمایش محتوای بلاگ با پشتیبانی کامل از سیستم کامنت، لایک و بوکمارک،
              همراه با همگام‌سازی لحظه‌ای وضعیت کاربر و بارگذاری بهینه داده‌ها.
            </p>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Technical Highlights
            </h6>
            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Dynamic Routing (App Router)</li>
              <li>Optimistic Update برای لایک و بوکمارک</li>
              <li>Rich Text Rendering (Tiptap)</li>
              <li>Client/Server Component Separation</li>
              <li>Skeleton Loader برای بارگذاری محتوا و کامنت‌ها</li>
              <li>Responsive Layout (Mobile & Desktop)</li>
              <li>Theme-Aware Rendering (Dark / Light Mode)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-20 lg:flex-row md:items-center lg:items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-col lg:gap-10 max-w-[500px]">
          <div>
            <div className="flex items-center gap-x-2 mb-3 lg:mb-4">
              <WrenchScrewdriverIcon className="w-6 h-6 lg:w-7 lg:h-7 text-secondary-700" />
              <h6 className="text-secondary-700 text-2xl xl:text-3xl font-bold">
                پنل ادمین
              </h6>
            </div>

            <p className="text-secondary-500 text-base lg:text-lg text-justify">
              رابط کاربری مدیریت محتوا با دسترسی نقش‌محور، شامل مدیریت بلاگ‌ها،
              دسته‌بندی‌ها، کاربران و سیستم تأیید کامنت‌ها با ساختار CRUD کامل و
              کنترل وضعیت.
            </p>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Technical Highlights
            </h6>

            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Role-Based Route Guard & Conditional Rendering</li>
              <li>Full CRUD Management Interface</li>
              <li>Form Validation (React Hook Form + Yup)</li>
              <li>Optimistic Mutation & Cache Invalidation</li>
              <li>Toast-based Feedback System</li>
            </ul>
          </div>
        </div>

        <div className="w-full mx-auto lg:mx-0 lg:max-w-[668px]">
          <div className="relative aspect-[16/10] w-full animate-fade drop-shadow-2xl ">
            <Image
              fill
              alt="blog list desktop"
              src="/images/panel-admin.png"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 lg:flex-row md:items-center lg:items-center">
        <div className="w-full mx-auto lg:mx-0 lg:max-w-[668px]">
          <div className="relative aspect-[16/10] w-full animate-fade drop-shadow-2xl ">
            <Image
              fill
              alt="blog list desktop"
              src="/images/theme-desktop.png"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:flex lg:flex-col lg:gap-10 max-w-[500px]">
          <div>
            <div className="flex items-center gap-x-2 mb-3 lg:mb-4">
              <MoonIcon className="w-6 h-6 lg:w-7 lg:h-7 text-secondary-700" />
              <h6 className="text-secondary-700 text-2xl xl:text-3xl font-bold">
                تم تاریک / روشن
              </h6>
            </div>

            <p className="text-secondary-500 text-base lg:text-lg">
              پشتیبانی از تم تاریک و روشن با حفظ وضعیت انتخاب کاربر در سطح
              اپلیکیشن.
            </p>
          </div>

          <div>
            <h6 className="text-secondary-700 text-lg xl:text-xl font-semibold mb-2">
              Technical Highlights
            </h6>

            <ul
              className="text-secondary-500 text-sm lg:text-base list-inside list-disc space-y-2 lg:space-y-3
"
            >
              <li>Theme State Persistence</li>
              <li>Context-based Theme Management</li>
              <li>Smooth UI Transition</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
