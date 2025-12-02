import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const PostInteraction = ({ post }) => {
  return (
    <div className="flex items-center gap-x-3">
      <ButtonIcon variant="outline">
        <ChatBubbleLeftEllipsisIcon />
        {post.commentsCount > 0 && (
          <span>{toPersianDigits(post.commentsCount)}</span>
        )}
      </ButtonIcon>
      <ButtonIcon variant="danger">
        <HeartIcon />
      </ButtonIcon>
      <ButtonIcon variant="outline">
        <BookmarkIcon />
      </ButtonIcon>
    </div>
  );
};

export default PostInteraction;
