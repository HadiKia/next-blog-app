const CardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14 lg:mb-20">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex items-center justify-center gap-x-1 mb-4 lg:mb-7">
            <div className="w-6 h-6 lg:w-7 lg:h-7 bg-secondary-100 rounded-md" />
            <div className="bg-secondary-100 w-14 h-6 lg:h-7 rounded-md" />
          </div>
          <div className="rounded-lg lg:rounded-xl bg-secondary-100 h-20 lg:h-24" />
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
