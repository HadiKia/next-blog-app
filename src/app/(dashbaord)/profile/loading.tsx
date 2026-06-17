const ProfilePageSkeleton = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10 ">
      <div className="h-8 w-32 rounded-md bg-secondary-200 animate-pulse mb-6"></div>

      <div className="grid lg:grid-cols-2 gap-6 lg:items-start">
        <div>
          <div className="w-20 h-5 rounded bg-secondary-200 animate-pulse mb-2"></div>
          <div className="w-full h-[42px] lg:h-[46px] rounded-md bg-secondary-200 animate-pulse"></div>
        </div>

        <div>
          <div className="w-20 h-5 rounded bg-secondary-200 animate-pulse mb-2"></div>
          <div className="w-full h-[42px] lg:h-[46px] rounded-md bg-secondary-200 animate-pulse"></div>
        </div>

        <div className="lg:col-span-2 ">
          <div className="w-20 h-5 rounded bg-secondary-200 animate-pulse mb-2"></div>
          <div className="w-full p-3 lg:p-5 rounded-lg text-secondary-800 border border-secondary-300 flex items-start  gap-x-4">
            <div className="aspect-square sm:aspect-video rounded-md w-full min-w-20 max-w-20 sm:min-w-40 sm:max-w-40 lg:min-w-60 lg:max-w-60 max-h-32 bg-secondary-200 animate-pulse"></div>

            <div className="flex flex-col gap-y-2 lg:gap-y-3 w-full">
              <div className="w-full lg:w-1/3 h-5 lg:h-7 rounded bg-secondary-200 animate-pulse"></div>
              <div className="w-10 lg:w-28 h-4 lg:h-6 rounded bg-secondary-200 animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="mt-4 lg:col-start-2 w-full h-[42px] lg:h-[46px] rounded-md bg-secondary-200 animate-pulse"></div>
      </div>
    </div>
  );
};

export default ProfilePageSkeleton;
