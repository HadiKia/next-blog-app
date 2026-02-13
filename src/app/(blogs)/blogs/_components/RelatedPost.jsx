import Link from "next/link";
import CoverImage from "./CoverImage";
import truncateText from "@/utils/truncateText";

const RelatedPost = ({ posts }) => {
  return (
    <div className="flex items-stretch gap-4 px-4 sm:px-0 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl lg:flex-col">
      {posts.map((post) => (
        <div
          className={`border border-secondary-200 bg-secondary-50 rounded-xl overflow-hidden flex flex-col lg:flex-row-reverse lg:items-center lg:gap-x-4 lg:rounded-none lg:border-none lg:bg-transparent lg:w-full ${posts.length > 1 ? "min-w-[90%]" : "min-w-full"}`}
          key={post._id}
        >
          <CoverImage
            {...post}
            wrapperClassName="lg:aspect-square lg:max-w-32 lg:rounded-lg lg:overflow-hidden"
            imgClassName="lg:object-left"
          />

          <div className="p-4 lg:p-0 flex flex-col gap-y-4 w-full  h-full">
            <div className="flex items-start justify-between gap-x-2">
              <Link href={`/blogs/${post.slug}`}>
                <h2 className=" font-bold text-base text-secondary-700 hover:text-secondary-800 duration-300 ease-out">
                  {post.title}
                </h2>
              </Link>
            </div>

            <div className="mt-auto">
              <Link href={`/blogs/${post.slug}`}>
                <p className="text-secondary-400 text-sm hover:text-secondary-500 duration-300 ease-out">
                  {truncateText(post.briefText, 50)}
                </p>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedPost;
