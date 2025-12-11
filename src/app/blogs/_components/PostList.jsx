import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon, TagIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/numberFormatter";

const PostList = async ({ posts }) => {
  // await new Promise((res) => setTimeout(() => res(), 1000));

  return posts.length > 0 ? (
    <div className="flex flex-col sm:grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-200 bg-secondary-50 rounded-xl overflow-hidden flex flex-col justify-between"
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between gap-x-2 mb-2">
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

            <Link href={`/blogs/${post.slug}`}>
              <p className="mb-6 text-secondary-400 text-base hover:text-secondary-500 duration-300 ease-out">
                {post.text}
              </p>
            </Link>

            <div className="flex items-center justify-between mt-auto">
              <Author {...post.author} />
              {/* <PostInteraction post={post} /> */}

              <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                <span>{toPersianDigits(post.readingTime)} دقیقه</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
