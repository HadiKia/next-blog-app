"use client";

import Button from "@/ui/Button";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Error = ({ error, reset }) => {
  return (
    <>
      <div className="h-screen">
        <div className="container xl:max-w-screen-xl">
          <div className="flex flex-col items-center justify-center pt-32">
            <h1 className="text-2xl font-bold text-secondary-700 mb-12 text-center">
              {error.message}
            </h1>
            <Button onClick={reset} variant="primary">
              <ArrowPathIcon className="w-5 h-5 mb-0.5" />
              <span> تلاش مجدد</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
