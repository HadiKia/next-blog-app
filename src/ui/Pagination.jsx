"use client";

import { generatePagination } from "@/utils/generatePagination";
import { toPersianDigits } from "@/utils/numberFormatter";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";

import { usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages }) {
  // const totalPages = Math.ceil(Number(length) / itemsPerPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-x-2">
      {totalPages ? (
        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />
      ) : null}

      <div className="flex items-center gap-x-1">
        {allPages.map((page, index) => {
          // let position: "first" | "last" | "single" | "middle" | undefined;
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      {totalPages ? (
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      ) : null}
    </div>
  );
}

// position?: "first" | "last" | "middle" | "single",
function PaginationNumber({ page, href, isActive, position }) {
  const className = classNames(
    "grid place-items-center w-9 h-9 lg:w-10 lg:h-10 text-sm lg:text-base duration-300 ease-linear rounded-full pt-0.5 lg:pt-1",
    {
      "z-10 bg-primary-900 text-secondary-100 font-medium": isActive,
      "!text-secondary-700": !isActive && position !== "middle",
      "text-secondary-700": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{toPersianDigits(page)}</div>
  ) : (
    <Link href={href} className={className}>
      {toPersianDigits(page)}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = classNames(
    "grid place-items-center w-9 h-9 lg:w-10 lg:h-10 rounded-full duration-300 ease-linear text-secondary-700",
    {
      "pointer-events-none opacity-40": isDisabled,
      "hover:bg-secondary-200 text-secondary-100 ": !isDisabled,
    }
  );

  const icon =
    direction === "left" ? (
      <ArrowLeftIcon className="w-4 h-4 lg:w-5 lg:h-5" />
    ) : (
      <ArrowRightIcon className="w-4 h-4 lg:w-5 lg:h-5" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
