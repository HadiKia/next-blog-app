"use client";
import { useCallback, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Select from "@/ui/Select";

const sortOptions = [
  {
    label: "تاریخ ایجاد (جدید ترین)",
    value: "latest",
  },
  {
    label: "تاریخ ایجاد (قدیمی ترین)",
    value: "earliest",
  },
  {
    label: "محبوبیت",
    value: "popular",
  },
  {
    label: "زمان مطالعه (نزولی)",
    value: "time_desc",
  },
  {
    label: "زمان مطالعه (صعودی)",
    value: "time_asc",
  },
];

const BlogSort = () => {
  const searchParams = useSearchParams();
  const [sort, setSort] = useState(searchParams.get("sort") || "");

  const router = useRouter();
  const pathname = usePathname();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      if (value === "") {
        params.delete(name);
      } else {
        params.set(name, value);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <Select
      onChange={(e) => {
        setSort(e.target.value);
        router.push(`${pathname}?${createQueryString("sort", e.target.value)}`);
      }}
      value={sort}
      options={sortOptions}
    />
  );
};

export default BlogSort;
