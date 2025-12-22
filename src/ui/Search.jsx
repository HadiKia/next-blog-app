"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = ({ onSubmitComplete }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentSearch = searchParams.get("search") || "";
  const [searchValue, setSearchValue] = useState(currentSearch);

  useEffect(() => {
    setSearchValue(currentSearch);
  }, [currentSearch]);

  const updateSearchParam = (value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("page", "1");
      params.set("search", value);
    } else {
      params.delete("page");
      params.delete("search");
    }

    router.push(`${pathname}?${params.toString()}`, {
      scroll: false,
    });

    onSubmitComplete?.();
  };

  const formSubmit = (e) => {
    e.preventDefault();
    updateSearchParam(searchValue);
  };

  const clearSearch = () => {
    setSearchValue("");
    updateSearchParam("");
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
          aria-label="clear search"
        >
          <XMarkIcon className="w-5 h-5 text-secondary-400" />
        </button>
      ) : (
        <button
          type="submit"
          className="absolute end-[1px] top-[1px] bottom-[1px] pe-4 ps-2 rounded-e-lg"
          aria-label="submit search"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-secondary-400" />
        </button>
      )}
    </form>
  );
};

export default Search;
