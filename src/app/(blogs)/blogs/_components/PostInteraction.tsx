"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import { toPersianDigits } from "@/utils/numberFormatter";
import toast from "react-hot-toast";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import type { Post } from "@/types";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type PostInteractionProps = {
  post: Post;
};

type ButtonVariant = "transparent" | "transparentError";

type LocalButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
};

const btnType: Record<ButtonVariant, string> = {
  transparent: "text-secondary-700",
  transparentError: "text-error-500",
};

const LocalButton = ({
  children,
  onClick,
  variant = "transparent",
  ...rest
}: LocalButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`p-1 [&>svg]:w-5 [&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6 ${btnType[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
};

const PostInteraction = ({ post }: PostInteractionProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const likeHandler = async (postId: string) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message ?? "خطایی رخ داد",
      );
    }
  };

  const bookmarkHandler = async (postId: string) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(
        (error as { response?: { data?: { message?: string } } })?.response
          ?.data?.message ?? "خطایی رخ داد",
      );
    }
  };

  const copyHandler = async () => {
    const url = `${window.location.origin}${pathname}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("آدرس صفحه کپی شد");
    } catch {
      toast.error("خطا در کپی کردن آدرس");
    }
  };

  return (
    <div className="w-full lg:w-fit flex items-start justify-evenly gap-3">
      <div className="flex lg:flex-col-reverse items-center">
        <span className="text-xs lg:text-sm text-secondary-500">
          {toPersianDigits(post.commentsCount)}
        </span>
        <LocalButton
          variant="transparent"
          onClick={() => {
            document
              .getElementById("post-comments")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ChatBubbleLeftEllipsisIcon />
        </LocalButton>
      </div>

      <div className="flex lg:flex-col-reverse items-center">
        <span className="text-xs lg:text-sm text-secondary-500">
          {toPersianDigits(post.likesCount)}
        </span>
        <LocalButton
          variant="transparentError"
          onClick={() => likeHandler(post._id)}
        >
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        </LocalButton>
      </div>

      <LocalButton
        variant="transparent"
        onClick={() => bookmarkHandler(post._id)}
      >
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </LocalButton>

      <LocalButton variant="transparent" onClick={copyHandler}>
        <ShareIcon />
      </LocalButton>
    </div>
  );
};

export default PostInteraction;