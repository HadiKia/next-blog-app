import { Suspense } from "react";
import PostsTable from "./_components/PostsTable";
import PostTableSkeleton from "./_components/PostTableSkeleton";
import Search from "@/ui/Search";
import { CreatePost } from "./_components/Buttons";
import queryString from "query-string";

const Posts = async ({ searchParams }) => {
  const params = await searchParams;
  const query = queryString.stringify(params);

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between lg:gap-x-8 border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">همه بلاگ ها</h2>
        <div className="flex items-center justify-between gap-x-4 lg:flex-1 lg:max-w-lg xl:max-w-xl">
          <Search />
          <CreatePost />
        </div>
      </div>
      <Suspense fallback={<PostTableSkeleton />} key={query}>
        <PostsTable query={query} />
      </Suspense>
    </div>
  );
};

export default Posts;
