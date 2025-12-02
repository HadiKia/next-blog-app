import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Spinner";

const BlogPage = () => {
  return (
    <div>
      <h1>لیست پست‌ها</h1>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default BlogPage;
