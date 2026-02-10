import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";
import PostComments from "../_components/comment/PostComments";
import {
  CalendarDateRangeIcon,
  ClockIcon,
  TagIcon,
} from "@heroicons/react/24/outline";
import PostInteraction from "../_components/PostInteraction";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { toPersianDigits } from "@/utils/numberFormatter";
import Author from "../_components/Author";
import { toLocalDateShort } from "@/utils/dateFormatter";
import DOMPurify from "isomorphic-dompurify";

export const dynamicParams = false;

export const generateStaticParams = async () => {
  const { posts } = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
};

export const generateMetadata = async ({ params }) => {
  const routeParams = await params;
  const post = await getPostBySlug(routeParams.slug);

  return {
    title: `${post.title}`,
  };
};

const SinglePost = async ({ params }) => {
  const routeParams = await params;
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const post = await getPostBySlug(routeParams.slug, options);

  if (!post) notFound();

  return (
    <div className="pb-20 lg:pt-10 grid lg:grid-cols-12 gap-8 lg:gap-y-10">
      <div className="lg:col-span-8 lg:order-2 ">
        <div className="relative flex flex-col lg:flex-col-reverse gap-y-6 mb-4 lg:mb-8">
          <div className="flex flex-col gap-y-3 lg:gap-y-6 lg:flex-col-reverse">
            <div className="relative aspect-video overflow-hidden lg:rounded-lg -mx-4 sm:mx-0">
              <Image
                fill
                alt={post.slug}
                src={post.coverImageUrl}
                className="object-cover object-center"
              />
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center ">
              <Author {...post.author} />
              <span className="hidden lg:block w-px"></span>

              <div className="flex items-center flex-wrap gap-2 lg:gap-3">
                <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                  <CalendarDateRangeIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                  <span>{toLocalDateShort(post.createdAt)}</span>
                </div>

                <span className="w-px h-4 bg-secondary-300"></span>

                <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                  <ClockIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                  <span>{toPersianDigits(post.readingTime)} دقیقه</span>
                </div>

                <span className="w-px h-4 bg-secondary-300"></span>

                <div className="flex items-center gap-x-1 text-xs lg:text-sm text-secondary-500">
                  <TagIcon className="w-4 h-4 lg:w-5 lg:h-5 mb-0.5" />
                  <span>{post.category.title}</span>
                </div>
              </div>
            </div>
          </div>

          <h1 className="text-secondary-700 text-2xl lg:text-3xl font-bold lg:max-w-[480px] xl:max-w-[640px]">
            {post.title}
          </h1>

          <div className="z-[1] lg:z-0 fixed bottom-0 inset-x-0 px-4 py-2 lg:p-0 bg-secondary-0 border-t border-secondary-200 lg:bg-transparent lg:border-none lg:absolute  lg:bottom-auto lg:top-0 lg:start-auto">
            <PostInteraction post={post} />
          </div>
        </div>

        <div
          className="prose min-w-full prose-p:my-0 prose-li:m-0 prose-ol:m-0 prose-headings:mb-4 prose-headings:text-secondary-700 prose-headings:text-2xl prose-p:text-secondary-500 prose-strong:text-secondary-700 prose-blockquote:border-secondary-200 prose-hr:my-10 prose-hr:border-secondary-200 prose-a:text-blue-500 prose-a:inline prose-a:no-underline prose-a:font-normal pb-8 lg:pb-10 border-b border-secondary-200 text-secondary-500"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.text),
          }}
        />
      </div>

      <PostComments post={post} />

      <div className="lg:col-span-4 lg:order-3">
        {post.related.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-secondary-700 mb-6 ">
              بلاگ های مرتبط
            </h3>
            <RelatedPost posts={post.related} />
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
