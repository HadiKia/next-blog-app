import CoverImage from "./CoverImage";
import Link from "next/link";
import {
  CalendarDateRangeIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import toLocalDateShort from "@/utils/dateFormatter";

const PostList = async ({ posts }) => {
  // await new Promise((res) => setTimeout(() => res(), 1000));

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
              {/* <div className="min-w-fit flex items-center gap-x-1 px-2 py-0.5 text-xs rounded-lg border border-secondary-200 bg-secondary-100 text-secondary-700 ">
                <TagIcon className="w-4 h-4 stroke-secondary-600 mb-0.5" />
                <span>{post.category.title}</span>
              </div> */}
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <p className="mb-6 text-secondary-400 text-sm hover:text-secondary-500 duration-300 ease-out">
                {truncateText(post.briefText, 70)}
              </p>
            </Link>

            <div className="flex items-center gap-x-3 mt-auto">
              {/* <Author {...post.author} /> */}
              {/* <PostInteraction post={post} /> */}
              <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                <CalendarDateRangeIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                <span>{toLocalDateShort(post.createdAt)}</span>
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
