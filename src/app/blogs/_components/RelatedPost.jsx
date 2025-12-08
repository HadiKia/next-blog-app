import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";

const RelatedPost = ({ posts }) => {
  return (
    <div className="mt-10">
      <p className="text-xl font-semibold mb-8">بلاگ های مرتبط</p>
      <div className="grid gap-4 grid-cols-6">
        {posts.map((post) => (
          <div
            key={post._id}
            className="col-span-6 md:col-span-3 lg:col-span-2 border border-secondary-200 rounded-xl overflow-hidden"
          >
            <CoverImage {...post} />
            <div className="p-4">
              <div className="flex items-center justify-between gap-x-2 mb-4">
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className=" font-bold text-base text-secondary-700 truncate max-w-48 lg:max-w-36">
                    {post.title}
                  </h2>
                </Link>
                <span className="text-sm text-secondary-600">{post.category.title}</span>
              </div>

              <Author {...post.author} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;
