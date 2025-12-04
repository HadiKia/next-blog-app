import Image from "next/image";
import { notFound } from "next/navigation";

const SinglePost = async ({ params }) => {
  await new Promise((res) => setTimeout(() => res(), 1000));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${params.postSlug}`
  );
  const { data } = await res.json();
  const {post} = data || {}

  if(!post) notFound()

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          fill
          alt={post.slug}
          src={post.coverImageUrl}
          className="object-cover object-center"
        />
      </div>

      {/* {post.related.length > 0 ? <RelatedPost posts={post.related} /> : null}
      <BlogComments post={post} /> */}
    </div>
  );
};

export default SinglePost;
