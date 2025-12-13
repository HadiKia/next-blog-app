"use client";

import { useState } from "react";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Search from "@/ui/Search";
import CategoryList from "app/blogs/_components/CategoryList";

const MobileFilterMenu = ({ categories }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button
        aria-label="openMenu"
        onClick={handleOpen}
        className="-me-2 p-2 cursor-pointer text-secondary-500 lg:hidden"
      >
        <FunnelIcon className="w-6 h-6" />
      </button>

      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm duration-300 ease-linear lg:hidden ${
          open
            ? "opacity-100 z-30"
            : "opacity-0 -z-10 absolute w-[1px] -start-1 -top-1"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed end-0 inset-y-0 w-full max-w-xs bg-secondary-0 flex flex-col px-4 shadow-xl rounded-tr-xl transform transition-transform duration-300 ease-linear z-40 lg:hidden
          ${open ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between py-4 mb-7 border-b border-secondary-200">
          <h6 className="text-primary-800 font-semibold text-lg">فیلتر ها</h6>
          <button
            onClick={handleClose}
            className=" flex cursor-pointer items-center justify-center rounded-md p-2 text-secondary-500"
            aria-label="closeMenu"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        <div>
          <Search onSubmitComplete={handleClose} />
          <CategoryList categories={categories} onClose={handleClose} />
        </div>
      </div>
    </>
  );
};

export default MobileFilterMenu;
