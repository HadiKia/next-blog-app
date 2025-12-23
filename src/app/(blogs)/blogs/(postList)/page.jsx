import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
import { toPersianDigits } from "@/utils/numberFormatter";
import Pagination from "@/ui/Pagination";

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
        <p className="mb-6 text-secondary-700">
          {posts.length === 0
            ? "پستی با این مشخصات پیدا نشد."
            : `${toPersianDigits(posts.length)} نتایج برای `}
          <span className="font-medium">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />

      <div className="my-8 lg:my-10">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default BlogPage;
