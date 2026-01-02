import { Suspense } from "react";
import CategoriesTable from "./_components/CategoriesTable";

const Categories = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">
          لیست دسته‌بندی ها
        </h2>
      </div>

      <Suspense fallback={<p>درحال بارگزاری دسته‌بندی ها</p>}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
};

export default Categories;
