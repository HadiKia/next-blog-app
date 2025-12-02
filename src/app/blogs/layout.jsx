import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

export const metadata = {
  title: "بلاگ‌ها",
};

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className="text-lg lg:text-xl font-bold mb-12 text-secondary-700">
        لیست بلاگ‌ها
      </h1>
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 xl:col-span-3 text-secondary-500 space-y-4">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="lg:col-span-8 xl:col-span-9 text-secondary-500 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
