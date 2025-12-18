export default function SidebarSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="-ms-2 p-2 w-6 h-6 rounded-md bg-secondary-200 absolute start-6 top-5 lg:hidden"></div>
      <div className="hidden lg:block lg:px-6 xl:px-8">
        <div className="py-5 mb-11 border-b border-secondary-200">
          <div className="h-11 w-full rounded-md bg-secondary-200"></div>
        </div>
        <div className="flex flex-col gap-y-5">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="h-10 w-full rounded-md bg-secondary-200"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
