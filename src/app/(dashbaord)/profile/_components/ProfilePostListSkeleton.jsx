const ProfilePostListSkeleton = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <div className="h-8 w-32 rounded-md bg-secondary-200 animate-pulse"></div>
      </div>

      <div className="flex flex-col sm:grid grid-cols-12 gap-6 lg:gap-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="col-span-12 md:col-span-6 xl:col-span-4 border border-secondary-200 bg-secondary-50 rounded-xl overflow-hidden flex flex-col"
          >
            <div className="aspect-video w-full bg-secondary-200 animate-pulse"></div>
            <div className="p-4 flex flex-col w-full">
              <div className="flex items-center justify-between mb-2">
                <div className="animate-pulse bg-secondary-200 w-40 h-7 rounded "></div>
                <div className="w-7 h-7 rounded bg-secondary-200 animate-pulse"></div>
              </div>

              <div className="animate-pulse bg-secondary-200 w-full h-10 rounded mb-3"></div>

              <div className="flex items-center gap-x-4 pt-3 border-t border-secondary-200">
                <div className="flex items-center gap-x-1">
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-secondary-200 animate-pulse"></span>
                  <span className="bg-secondary-200 animate-pulse h-4 lg:h-5 w-14 rounded"></span>
                </div>

                <div className="flex items-center gap-x-1">
                  <span className="w-4 h-4 lg:w-5 lg:h-5 rounded bg-secondary-200 animate-pulse"></span>
                  <span className="bg-secondary-200 animate-pulse h-4 lg:h-5 w-14 rounded"></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfilePostListSkeleton;
