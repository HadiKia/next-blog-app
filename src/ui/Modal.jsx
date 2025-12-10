"use client";

import { useEffect, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";

const Modal = ({ children, title, description, open, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ref = useOutsideClick(() => {
    onClose?.();
  });

  useEffect(() => {
    let rafId;
    let timeoutId;

    if (open) {
      setIsMounted(true);
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
      timeoutId = setTimeout(() => {
        setIsMounted(false);
      }, 300);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [open]);

  if (!isMounted) return null;

  return createPortal(
    <>
      {/* backdrop */}
      <div
        aria-hidden
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-10  duration-300 ease-linear
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* modal */}
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={`fixed z-20 inset-x-0 bottom-0 md:mx-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:max-w-xl bg-secondary-0 dark:bg-secondary-50 rounded-t-xl md:rounded-xl px-4 py-6 md:p-6 max-h-[calc(100%-100px)] overflow-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl duration-300 ease-linear
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[100vh] opacity-0"
          }
        `}
      >
        {/* header */}
        <div className="pb-4 border-b border-secondary-200 mb-6">
          <div className="flex items-center justify-between text-secondary-700">
            <h6 className="text-lg font-semibold">{title}</h6>
            <button
              onClick={onClose}
              type="button"
              className="p-2 -m-2"
              aria-label="Close"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {description && (
            <p className="text-primary-400 text-sm lg:text-base mt-2">
              {description}
            </p>
          )}
        </div>

        <div>{children}</div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
