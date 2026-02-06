import { getPosts } from "@/services/postServices";
import Empty from "@/ui/Empty";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/(blogs)/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

const Category = async ({ params, searchParams }) => {
  const { categorySlug } = await params;

  const sp = await searchParams;

  const queries = `${queryString.stringify(sp)}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  if (!posts) return <Empty message="بلاگی در این دسته‌بندی پیدا نشد." />;

  return (
    <div>
      {posts.length === 0 ? (
        <Empty message="بلاگی در این دسته‌بندی پیدا نشد." />
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Category;
