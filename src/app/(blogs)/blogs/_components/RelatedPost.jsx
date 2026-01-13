import Link from "next/link";
import Author from "./Author";
import CoverImage from "./CoverImage";

const RelatedPost = ({ posts }) => {
  return (
    <div className="flex flex-col">
      {posts.map((post) => (
        <div
          className="border-t last-of-type:border-b border-e border-secondary-200 bg-secondary-50 flex last-of-type:rounded-b-lg first-of-type:rounded-t-lg overflow-hidden"
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

            <div className="mt-auto">
              <Author {...post.author} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedPost;
