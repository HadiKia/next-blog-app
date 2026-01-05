import { Suspense } from "react";
import CategoriesTable from "./_components/CategoriesTable";
import CategoriesTableSkeleton from "./_components/CategoriesTableSkeleton";
import { CreateCategory } from "./_components/Buttons";

const Categories = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="flex items-center justify-between lg:gap-x-8 border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">
          لیست دسته‌بندی ها
        </h2>
        <CreateCategory />
      </div>

      <Suspense fallback={<CategoriesTableSkeleton />}>
        <CategoriesTable />
      </Suspense>
    </div>
  );
};

export default Categories;
