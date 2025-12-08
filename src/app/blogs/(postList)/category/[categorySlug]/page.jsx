import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

const Category = async ({ params, searchParams }) => {
  const { categorySlug } = await params;

  const sp = await searchParams;

  const queries = `${queryString.stringify(sp)}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        <p className="text-lg lg:text-xl text-secondary-600 text-center mt-20">
          پستی در این دسته بندی پیدا نشد.
        </p>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
};

export default Category;
