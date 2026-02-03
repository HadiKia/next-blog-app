"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getPostsByIds, likePostApi } from "@/services/postServices";
import { toast } from "react-hot-toast";
import { usePathname } from "next/navigation";
import CoverImage from "app/(blogs)/blogs/_components/CoverImage";
import Link from "next/link";
import { toLocalDateShort2 } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import truncateText from "@/utils/truncateText";
import Button from "@/ui/Button";
import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import FavoritesSkeleton from "./loading";

const Favorites = () => {
  const { user, getUser, isLoading: isLoadingUser } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  const fetchPosts = async (likedPosts) => {
    try {
      setLoading(true);
      if (!likedPosts?.length) {
        setPosts([]);
        return;
      }
      const data = await getPostsByIds(likedPosts);
      setPosts(data);
    } catch (err) {
      console.error(err);
      toast.error("مشکلی در بارگذاری پست‌ها رخ داد");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchPosts(user.likedPosts);
  }, [user, pathname]);

  useEffect(() => {
    getUser();
  }, []);

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);

      const isLiked = user.likedPosts.includes(postId);

      await getUser();
      if (isLiked) {
        setPosts((prev) => prev.filter((post) => post._id !== postId));
      } else {
        const newPost = await getPostsByIds([postId]);
        setPosts((prev) => [...prev, ...newPost]);
      }
    } catch (err) {
      toast.error(err?.response?.data?.message || "خطا در لایک کردن پست");
    }
  };

  if (loading || isLoadingUser) return <FavoritesSkeleton />;
  if (!posts.length) return <p>هیچ پستی یافت نشد.</p>;

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">مورد علاقه‌ها</h2>
      </div>

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
                <Button
                  variant="transparent"
                  className="p-1 [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6 text-error-500"
                  onClick={() => likeHandler(post._id)}
                >
                  <HeartIcon />
                </Button>
              </div>

              <Link href={`/blogs/${post.slug}`}>
                <p className="mb-6 text-secondary-400 text-sm hover:text-secondary-500 duration-300 ease-out">
                  {truncateText(post.briefText, 50)}
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
    </div>
  );
};

export default Favorites;
