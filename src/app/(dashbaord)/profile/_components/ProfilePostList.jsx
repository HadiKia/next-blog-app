"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getPostsByIds } from "@/services/postServices";
import { toast } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { toLocalDateShort2 } from "@/utils/dateFormatter";
import { toPersianDigits } from "@/utils/numberFormatter";
import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import truncateText from "@/utils/truncateText";
import Button from "@/ui/Button";
import CoverImage from "app/(blogs)/blogs/_components/CoverImage";
import ProfilePostListSkeleton from "./ProfilePostListSkeleton";
import Empty from "@/ui/Empty";

const ProfilePostList = ({
  title,
  postIds = [],
  actionApi,
  ActionIcon,
  actionClassName,
}) => {
  const { user, getUser, isLoading } = useAuth();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  const fetchPosts = async () => {
    try {
      setLoading(true);
      if (!postIds?.length) {
        setPosts([]);
        return;
      }
      const data = await getPostsByIds(postIds);
      setPosts(data);
    } catch {
      toast.error("مشکلی در بارگذاری پست‌ها رخ داد");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) return;
    fetchPosts();
  }, [user, pathname]);

  useEffect(() => {
    getUser();
  }, []);

  const actionHandler = async (postId) => {
    try {
      const { message } = await actionApi(postId);
      toast.success(message);

      await getUser();
      setPosts((prev) => prev.filter((p) => p._id !== postId));
    } catch (err) {
      toast.error(err?.response?.data?.message || "خطا در انجام عملیات");
    }
  };

  if (loading || isLoading) return <ProfilePostListSkeleton />;
  if (!posts.length)
    return (
      <div className="py-20">
        <Empty message="شما هنوز بلاگی را اضافه نکرده‌اید." />
      </div>
    );

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <div className="border-b border-secondary-200 pb-6 mb-10">
        <h2 className="text-2xl font-bold text-secondary-700">{title}</h2>
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
                  className={`p-1 [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6 ${actionClassName}`}
                  onClick={() => actionHandler(post._id)}
                >
                  <ActionIcon />
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

export default ProfilePostList;
