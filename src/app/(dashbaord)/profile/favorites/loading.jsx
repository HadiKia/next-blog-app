const FavoritesSkeleton = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <div className="h-8 w-32 rounded-md bg-secondary-200 animate-pulse"></div>
      </div>

       <div className="flex flex-col sm:grid grid-cols-12 md:gap-6 -mx-4 sm:mx-0 ">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="col-span-12 md:col-span-6 border-t last-of-type:border-b md:border border-secondary-200 bg-secondary-50 md:rounded-xl md:overflow-hidden flex"
        >
          <div className="aspect-square w-full max-w-32 bg-secondary-200 animate-pulse"></div>
          <div className="p-4 flex flex-col w-full">
            <div className="animate-pulse bg-secondary-200 w-40 h-7 rounded mb-2"></div>

            <div className="animate-pulse bg-secondary-200 w-full h-10 rounded mb-6"></div>

            <div className="flex items-center gap-x-3 mt-auto">
              <div className="flex items-center gap-x-1">
                <span className="w-4 h-4 lg:w-5 lg:h-5 rounded bg-secondary-200 animate-pulse"></span>
                <span className="bg-secondary-200 animate-pulse h-4 lg:h-5 w-10 rounded"></span>
              </div>

              <div className="w-px h-full bg-secondary-300"></div>

              <div className="flex items-center gap-x-1">
                <span className="w-4 h-4 lg:w-5 lg:h-5 rounded bg-secondary-200 animate-pulse"></span>
                <span className="bg-secondary-200 animate-pulse h-4 lg:h-5 w-10 rounded"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FavoritesSkeleton;
