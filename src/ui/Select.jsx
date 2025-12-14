"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Select = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    if (open) setOpen(false);
  });

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-x-2 text-secondary-500 hover:text-secondary-700 focus:text-secondary-700 duration-300 ease-linear"
      >
        <span>مرتب سازی</span>
        <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
      </button>

      <ul
        className={`absolute top-full mt-2 end-0 w-44  bg-secondary-0 rounded-lg border border-secondary-200 overflow-hidden shadow-lg z-[2] text-secondary-500 transition-all duration-300 ease-linear py-1 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 mt-0 py-0"
        }`}
      >
        <li
          onClick={() => {
            onChange({ target: { value: "" } });
            setOpen(false);
          }}
          className={`px-4 py-2 cursor-pointer flex items-center justify-between gap-x-2 hover:bg-secondary-100 hover:text-secondary-900 transition-all duration-300 ease-linear leading-5 ${
            value === ""
              ? "text-secondary-900 font-semibold text-sm"
              : "text-xs"
          }`}
        >
          پیش‌فرض
        </li>

        {options.map((item) => {
          const active = item.value === value;

          return (
            <li
              key={item.value}
              onClick={() => {
                onChange({ target: { value: item.value } });
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer flex items-center justify-between gap-x-2 hover:bg-secondary-100 hover:text-secondary-900 transition-all duration-300 ease-linear leading-5 ${
                active ? "text-secondary-900 font-semibold text-sm" : "text-xs"
              }`}
            >
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
