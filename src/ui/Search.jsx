"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }

    router.push(`${pathName}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form
      onSubmit={formSubmit}
      className="flex flex-row items-center relative min-w-full lg:min-w-max lg:max-w-sm"
    >
      <input
        className="textField__input pe-10 q"
        placeholder="جستجو"
        autoComplete="off"
        type="text"
        name="search"
      />
      <button className="absolute end-[1px] top-[1px] bottom-[1px] pe-4 ps-2  rounded-e-lg ">
        <MagnifyingGlassIcon className="w-5 h-5 text-secondary-400" />
      </button>
    </form>
  );
};

export default Search;
