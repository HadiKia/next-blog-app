"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  const currentSearch = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(currentSearch);

  useEffect(() => {
    setSearchValue(currentSearch);
  }, [currentSearch]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }
    router.push(`${pathName}?${newParams.toString()}`, {
      scroll: false,
      shallow: true,
    });
  };

  const clearSearch = () => {
    setSearchValue("");
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("search");
    router.push(`${pathName}?${newParams.toString()}`, {
      scroll: false,
      shallow: true,
    });
  };

  return (
    <form
      onSubmit={formSubmit}
      className="flex flex-row items-center relative flex-1"
    >
      <input
        className="textField__input pe-10 q"
        placeholder="جستجو"
        autoComplete="off"
        type="text"
        name="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {currentSearch ? (
        <button
          type="button"
          className="absolute end-[1px] top-[1px] bottom-[1px] pe-4 ps-2 rounded-e-lg"
          onClick={clearSearch}
        >
          <XMarkIcon className="w-5 h-5 text-secondary-400" />
        </button>
      ) : (
        <button
          type="submit"
          className="absolute end-[1px] top-[1px] bottom-[1px] pe-4 ps-2 rounded-e-lg"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-secondary-400" />
        </button>
      )}
    </form>
  );
};

export default Search;
