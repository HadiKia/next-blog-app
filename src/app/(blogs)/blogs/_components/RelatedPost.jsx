import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";
import { TagIcon } from "@heroicons/react/24/outline";

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
              <div className="flex items-center justify-between gap-x-2 mb-6">
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className=" font-bold text-lg text-secondary-700 hover:text-secondary-800 duration-300 ease-out">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-x-1 px-2 py-0.5 text-xs rounded-lg border border-secondary-200 bg-secondary-100 text-secondary-700 ">
                  <TagIcon className="w-4 h-4 stroke-secondary-600 mb-0.5" />
                  <span>{post.category.title}</span>
                </div>
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
