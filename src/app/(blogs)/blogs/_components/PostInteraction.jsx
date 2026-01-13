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
import { useRouter } from "next/navigation";

const PostInteraction = ({ post }) => {
  const router = useRouter();

  const likeHandler = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const bookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className="w-full lg:w-fit flex items-start justify-evenly gap-3">
      <div className="flex lg:flex-col-reverse items-center">
        <span className="text-xs lg:text-sm text-secondary-500">
          {toPersianDigits(post.commentsCount)}
        </span>
        <Button variant="transparent">
          <ChatBubbleLeftEllipsisIcon />
        </Button>
      </div>

      <div className="flex lg:flex-col-reverse items-center">
        <span className="text-xs lg:text-sm text-secondary-500">
          {toPersianDigits(post.likesCount)}
        </span>
        <Button
          variant="transparentError"
          onClick={() => likeHandler(post._id)}
        >
          {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
        </Button>
      </div>

      <Button variant="transparent" onClick={() => bookmarkHandler(post._id)}>
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </Button>

      <Button variant="transparent">
        <ShareIcon />
      </Button>
    </div>
  );
};

export default PostInteraction;

const btnType = {
  transparent: "text-secondary-700",
  transparentError: "text-error-500",
};

const Button = ({ children, onClick, variant = "transparent", ...rest }) => {
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
