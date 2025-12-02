import Spinner from "@/ui/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-y-10 items-center justify-center">
      <span className="text-lg text-secondary-500">درحال بارگزاری پست‌ها</span>
      <Spinner />
    </div>
  );
};

export default Loading;
