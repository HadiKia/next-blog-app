import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const posts = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
};

export const generateMetadata = async ({ params }) => {
  const routeParams = await params;
  const post = await getPostBySlug(routeParams.slug);

  return {
    title: `پست ${post.title}`,
  };
};

const SinglePost = async ({ params }) => {
  const routeParams = await params;
  await new Promise((res) => setTimeout(() => res(), 1000));

  const post = await getPostBySlug(routeParams.slug);

  if (!post) notFound();

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
