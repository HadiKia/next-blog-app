const Loading = () => {
  return (
    <div className="pb-20 lg:pt-10 grid lg:grid-cols-12 gap-8 lg:gap-y-10">
      <div className="lg:col-span-8 lg:order-2 ">
        <div className="relative flex flex-col lg:flex-col-reverse gap-y-6 mb-4 lg:mb-8">
          <div className="flex flex-col gap-y-3 lg:gap-y-6 lg:flex-col-reverse">
            <div className="relative aspect-video overflow-hidden lg:rounded-lg -mx-4 sm:mx-0 bg-secondary-200 animate-pulse"></div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center ">
              <div className="flex items-center justify-start gap-x-2">
                <div className="w-6 h-6 bg-secondary-200 animate-pulse rounded"></div>
                <div className="bg-secondary-200 animate-pulse h-6 w-28 rounded"></div>
              </div>

              <span className="hidden lg:block w-px"></span>

              <div className="flex items-center gap-2 lg:gap-3 w-full">
                <div className="flex items-center gap-x-1 w-full lg:w-fit">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse"></div>
                  <div className="bg-secondary-200 animate-pulse h-4 lg:h-6 w-full lg:w-20 rounded"></div>
                </div>

                <span className="w-px h-4 bg-secondary-300"></span>

                <div className="flex items-center gap-x-1 w-full lg:w-fit">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse"></div>
                  <div className="bg-secondary-200 animate-pulse h-4 lg:h-6 w-full lg:w-20 rounded"></div>
                </div>

                <span className="w-px h-4 bg-secondary-300"></span>

                <div className="flex items-center gap-x-1 w-full lg:w-fit">
                  <div className="w-4 h-4 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse"></div>
                  <div className="bg-secondary-200 animate-pulse h-4 lg:h-6 w-full lg:w-20 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-8 lg:h-9 w-full lg:w-60 bg-secondary-200 animate-pulse rounded-md"></div>

          <div className="z-[1] lg:z-0 fixed bottom-0 inset-x-0 px-4 py-2 lg:p-0 bg-secondary-0 border-t border-secondary-200 lg:bg-transparent lg:border-none lg:absolute  lg:bottom-auto lg:top-0 lg:start-auto w-full lg:w-fit flex items-start justify-evenly gap-3">
            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse m-1"></span>
            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse m-1"></span>
            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse m-1"></span>
            <span className="w-5 h-5 lg:w-6 lg:h-6 rounded bg-secondary-200 animate-pulse m-1"></span>
          </div>
        </div>

        <div className="w-full h-96 lg:h-40 bg-secondary-200 animate-pulse rounded-md"></div>
      </div>

      <div className="lg:col-span-4 lg:order-3 -mx-4 sm:mx-0 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl">
        <div className="w-40 h-8 bg-secondary-200 animate-pulse rounded mb-6 mx-4 sm:mx-0"></div>
        <div className="flex items-stretch gap-4 px-4 sm:px-0 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl lg:flex-col ">
          {[...Array(3)].map((_, index) => (
            <div
              className="border border-secondary-200 bg-secondary-50 rounded-xl overflow-hidden flex flex-col lg:flex-row-reverse lg:items-center lg:gap-x-4 lg:rounded-none lg:border-none lg:bg-transparent lg:w-full min-w-full"
              key={index}
            >
              <div className="relative w-full aspect-video bg-secondary-200 animate-pulse lg:aspect-square lg:max-w-32 lg:rounded-lg lg:overflow-hidden"></div>
              <div className="p-4 lg:p-0 flex flex-col w-full gap-y-4">
                <div className="w-2/3 lg:w-full h-6 bg-secondary-200 animate-pulse rounded"></div>

                <div className="mt-auto">
                  <div className="bg-secondary-200 animate-pulse w-full rounded h-5 lg:h-10"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
