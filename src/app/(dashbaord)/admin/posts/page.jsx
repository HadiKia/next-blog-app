import { Suspense } from "react";
import PostsTable from "./_components/PostsTable";

const Posts = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <h2 className="text-2xl font-bold text-secondary-700 mb-6 lg:mb-8">
        همه بلاگ ها
      </h2>
      <Suspense fallback={<p>درحال بارگزاری جدول</p>}>
        <PostsTable />
      </Suspense>
    </div>
  );
};

export default Posts;
