"use client";

import useOutsideClick from "@/hooks/useOutsideClick";
import { BarsArrowDownIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const Select = ({ value, onChange, options }) => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useOutsideClick(() => setOpen(false));

  useEffect(() => {
    let rafId;
    let timeout;

    if (open) {
      setIsMounted(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      timeout = setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (timeout) clearTimeout(timeout);
    };
  }, [open]);

  return (
    <div className="relative flex-1 max-w-10 lg:min-w-max " ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center gap-x-2 lg:px-4 w-full h-full rounded-lg text-secondary-400 focus:text-secondary-600 border border-secondary-300 hover:border-primary-600 hover:text-secondary-600 outline outline-transparent focus:outline-primary-100 focus:border-primary-600 transition-all duration-300 ease-out"
      >
        <span className="hidden lg:block">مرتب سازی بر اساس</span>
        <FunnelIcon className="w-5 h-5" />
      </button>

      {isMounted && (
        <ul
          className={`absolute top-full mt-2 end-0 lg:inset-x-0 w-44 lg:w-full bg-secondary-0 rounded-lg border border-secondary-200 overflow-hidden shadow-lg z-[2] text-secondary-500 transition-all duration-300 ease-linear py-1 ${
            isVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <li
            onClick={() => {
              onChange({ target: { value: "" } });
              setOpen(false);
            }}
            className={`px-4 py-2 cursor-pointer flex items-center justify-between gap-x-2 hover:bg-secondary-100 hover:text-secondary-900 transition-all duration-300 ease-out leading-5 ${
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
                className={`px-4 py-2 cursor-pointer flex items-center justify-between gap-x-2 hover:bg-secondary-100 hover:text-secondary-900 transition-all duration-300 ease-out leading-5 ${
                  active
                    ? "text-secondary-900 font-semibold text-sm"
                    : "text-xs"
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
