"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryList = ({ categories, onClose }) => {
  const pathname = usePathname();

  return (
    <div className="mt-8 lg:mt-0 flex flex-col gap-y-3 lg:gap-y-4">
      <h6 className="text-secondary-700 font-semibold text-base lg:text-xl">
        دسته‌بندی ها
      </h6>
      <ul className="flex flex-col gap-y-1">
        <li>
          <Link
            href="/blogs"
            onClick={() => onClose?.()}
            className={`text-sm lg:text-base py-2 transition-colors duration-300 ease-linear hover:text-secondary-700 ${
              pathname === "/blogs"
                ? "text-secondary-700 font-medium"
                : "text-secondary-400"
            }`}
          >
            همه
          </Link>
        </li>
        {categories.map((category) => {
          const categoryPath = `/blogs/category/${category.slug}`;
          const isActive = pathname === categoryPath;
          return (
            <li key={category._id}>
              <Link
                href={categoryPath}
                onClick={() => onClose?.()}
                className={`text-base lg:text-lg py-2 transition-colors duration-300 ease-linear hover:text-secondary-700 ${
                  isActive
                    ? "text-secondary-700 font-medium"
                    : "text-secondary-400"
                }`}
              >
                {category.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
