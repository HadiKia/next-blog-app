"use client";

import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { createPortal } from "react-dom";

const Modal = ({ children, title, description, open, onClose, className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      setIsMounted(true);
    } else {
      setIsVisible(false);
    }
  }, [open]);

  useEffect(() => {
    if (isMounted && open) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isMounted, open]);

  useEffect(() => {
    const node = modalRef.current;
    if (!node) return;

    const handleTransitionEnd = (e) => {
      if (!open && e.target === node) {
        setIsMounted(false);
      }
    };

    node.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      node.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [open]);

  if (!isMounted) return null;

  return createPortal(
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        aria-hidden
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-10  duration-300 ease-linear
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        className={` fixed z-20 inset-x-0 bottom-0 md:mx-auto md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:max-w-xl bg-secondary-0 dark:bg-secondary-50 rounded-t-xl md:rounded-xl px-4 py-6 md:p-6 max-h-[calc(100%-100px)] overflow-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl duration-300 ease-linear
          ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-[100vh] opacity-0"
          }
          ${className}
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
    document.body,
  );
};

export default Modal;
