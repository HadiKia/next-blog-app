import { Suspense } from "react";
import CommentsTable from "./_components/CommentsTable";
import CommentsTableSkeleton from "./_components/CommentsTableSkeleton";

const CommentsPage = async () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">لیست نظرات</h2>
      </div>

      <Suspense fallback={<CommentsTableSkeleton />}>
        <CommentsTable />
      </Suspense>
    </div>
  );
};

export default CommentsPage;
