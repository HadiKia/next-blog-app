import CategoryList from "../_components/CategoryList";
import Search from "@/ui/Search";
import BlogSort from "../_components/BlogSort";
import MobileFilterMenu from "@/components/category/MobileFilterMenu";

export const metadata = {
  title: "بلاگ‌ها",
};

const Layout = async ({ children }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  return (
    <div className="py-6 lg:py-10">
      <div className="flex items-center justify-between border-b border-secondary-200 pb-6 mb-10">
        <h1 className="text-2xl font-bold  text-secondary-700 lg:col-span-4 xl:col-span-3 ">
          لیست بلاگ‌ها
        </h1>

        <div className="flex items-center gap-x-2 lg:gap-x-8 lg:flex-1 lg:justify-end">
          <BlogSort />

          <div className="hidden lg:block lg:w-full lg:max-w-sm">
            <Search />
          </div>

          <MobileFilterMenu categories={categories} />
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
        <div className="hidden lg:block lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <CategoryList categories={categories} />
        </div>

        <div className="lg:col-span-8 xl:col-span-9 text-secondary-500">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
