"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const RHFSelect = ({
  label,
  value,
  onChange,
  options = [],
  isRequired,
  placeholder,
  error,
}) => {
  const [open, setOpen] = useState(false);

  const selectedOption = options.find((o) => o.value === value);

  const ref = useOutsideClick(() => open && setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <label className="text-secondary-600 text-sm inline-block mb-2">
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </label>

      <div
        className="textField__input pe-10 cursor-pointer relative flex items-center"
        onClick={() => setOpen((p) => !p)}
      >
        {selectedOption?.label || (
          <span className="text-secondary-400 text-sm py-0.5">
            {placeholder}
          </span>
        )}
        <span className="absolute end-4 pointer-events-none">
          <ChevronDownIcon className="w-4 h-4 " />
        </span>
      </div>

      <ul
        className={`absolute top-full mt-2 w-full bg-secondary-0 rounded-lg border border-secondary-200 overflow-hidden shadow-lg z-[2] transition-all duration-300 ease-linear overflow-y-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl
          ${open ? "max-h-56 opacity-100" : "max-h-0 opacity-0 mt-0 py-0"}
        `}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
            className={`px-4 py-2.5 flex items-center justify-between cursor-pointer transition-all duration-300 ease-out text-sm lg:text-base ${
              selectedOption?.label === option.label
                ? "bg-secondary-100 text-primary-800 font-medium "
                : "text-secondary-500 hover:bg-secondary-100"
            }`}
          >
            {option.label}
            {selectedOption?.label === option.label ? (
              <CheckIcon className="w-5 h-5 text-primary-800" />
            ) : null}
          </li>
        ))}
      </ul>

      {error && <p className="text-error-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default RHFSelect;
