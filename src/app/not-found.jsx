"use client";
import useMoveBack from "@/hooks/useMoveBack";
import Button from "@/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const NotFound = () => {
  const moveBack = useMoveBack();

  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex flex-col items-center justify-center pt-32">
          <h1 className="text-2xl font-bold text-secondary-700 mb-12">
            صفحه ای که به دنبال آن بودید پیدا نشد.
          </h1>
          <Button onClick={moveBack} variant="primary">
            <ArrowRightIcon className="w-5 h-5 mb-0.5" />
            <span>برگشت</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
