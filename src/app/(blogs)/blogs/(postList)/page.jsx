import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/numberFormatter";
import Pagination from "@/ui/Pagination";
import Empty from "@/ui/Empty";

const BlogPage = async ({ searchParams }) => {
  const params = await searchParams;
  const queries = queryString.stringify(params);

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);

  const { search } = params;

  return (
    <>
      {search ? (
        posts.length === 0 ? (
          <Empty message={`بلاگی با مشخصات "${search}" پیدا نشد.`} />
        ) : (
          <p className="text-secondary-500 text-base md:text-lg text-center mb-6 lg:mb-10">
            {toPersianDigits(posts.length)} نتیجه برای "{search}"
          </p>
        )
      ) : null}
      <PostList posts={posts} />

      {!!totalPages && (
        <div className="my-8 lg:my-10">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </>
  );
};

export default BlogPage;
