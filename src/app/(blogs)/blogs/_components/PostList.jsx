import CoverImage from "./CoverImage";
import Link from "next/link";
import { CalendarDateRangeIcon } from "@heroicons/react/24/outline";
import truncateText from "@/utils/truncateText";
import { toLocalDateShort2 } from "@/utils/dateFormatter";
import Author from "./Author";

const PostList = ({ posts }) => {
  return posts.length > 0 ? (
    <div className="flex flex-col sm:grid grid-cols-12 gap-6 lg:gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 md:col-span-6 xl:col-span-4 border border-secondary-200 bg-secondary-50 rounded-xl overflow-hidden flex flex-col"
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="p-4 flex flex-col w-full h-full">
            <div className="flex items-start justify-between gap-x-2 mb-2 ">
              <Link href={`/blogs/${post.slug}`}>
                <h2 className=" font-bold text-lg text-secondary-700 hover:text-secondary-800 duration-300 ease-out ">
                  {post.title}
                </h2>
              </Link>
            </div>

            <div className="mt-auto">
              <Link href={`/blogs/${post.slug}`}>
                <p className="text-secondary-400 text-sm hover:text-secondary-500 duration-300 ease-out mb-3">
                  {truncateText(post.briefText, 80)}
                </p>
              </Link>

              <div className="flex items-center gap-x-4 pt-3 border-t border-secondary-200">
                <Author {...post.author} />

                <span className="blog h-5 w-px bg-secondary-200"></span>

                <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                  <CalendarDateRangeIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                  <span>{toLocalDateShort2(post.createdAt)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
