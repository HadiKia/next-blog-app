import { SlashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-x-1">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={`flex items-center gap-x-1 text-sm lg:text-base ${
              breadcrumb.active
                ? "text-secondary-700 font-medium"
                : "text-secondary-500"
            }`}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <SlashIcon className="w-5 h-5" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
