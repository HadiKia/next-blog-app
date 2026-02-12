import CoverImage from "./CoverImage";
import Link from "next/link";
import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import { toLocalDateShort2 } from "@/utils/dateFormatter";

const PostList = ({ posts }) => {
  return posts.length > 0 ? (
    <div className="flex flex-col sm:grid grid-cols-12 md:gap-6 -mx-4 sm:mx-0 ">
      {posts.map((post) => (
        <div
          className="col-span-12 md:col-span-6 border-t last-of-type:border-b md:border border-secondary-200 bg-secondary-50 md:rounded-xl md:overflow-hidden flex "
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="p-4 flex flex-col w-full">
            <div className="flex items-start justify-between gap-x-2 mb-2 ">
              <Link href={`/blogs/${post.slug}`}>
                <h2 className=" font-bold text-lg text-secondary-700 hover:text-secondary-800 duration-300 ease-out">
                  {post.title}
                </h2>
              </Link>
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <p className="mb-6 text-secondary-400 text-sm hover:text-secondary-500 duration-300 ease-out">
                {truncateText(post.briefText, 70)}
              </p>
            </Link>

            <div className="flex items-center gap-x-3 mt-auto">
              <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                <CalendarDateRangeIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                <span>{toLocalDateShort2(post.createdAt)}</span>
              </div>

              <span className="w-px h-full bg-secondary-300"></span>

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
