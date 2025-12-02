import CoverImage from "./CoverImage";
import Link from "next/link";
import { ClockIcon } from "@heroicons/react/24/outline";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

const PostList = async () => {
  await new Promise((res) => setTimeout(() => res(), 1000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();

  console.log(posts);

  return posts.length > 0 ? (
    <div className="flex flex-col sm:grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div
          className="col-span-12 sm:col-span-6 xl:col-span-4 border border-secondary-200 rounded-xl overflow-hidden "
          key={post._id}
        >
          <CoverImage {...post} />
          <div className="p-4">
            <div className="flex items-center justify-between gap-x-2 mb-2">
              <Link href={`/blogs/${post.slug}`}>
                <h2 className=" font-bold text-lg text-secondary-700">
                  {post.title}
                </h2>
              </Link>
              <div className="flex items-center gap-x-0.5 text-xs text-secondary-600">
                <ClockIcon className="w-4 h-4 stroke-secondary-600 me-0.5 mb-0.5" />
                <span>{post.readingTime}</span>
                <span>دقیقه</span>
              </div>
            </div>

            <Link href={`/blogs/${post.slug}`}>
              <p className="mb-6 text-secondary-400 text-base">{post.text}</p>
            </Link>

            <div className="flex items-center justify-between">
              <Author {...post.author} />
              <PostInteraction post={post} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ) : null;
};

export default PostList;
