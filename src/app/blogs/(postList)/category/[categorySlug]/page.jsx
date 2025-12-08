import PostList from "app/blogs/_components/PostList";

const Category = async ({ params }) => {
  const { categorySlug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};

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
