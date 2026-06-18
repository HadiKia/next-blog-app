import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";
import type { Comment as CommentType } from "@/types";

type CommentProps = {
  comment: CommentType;
  onAddComment?: () => void;
};

const Comment = ({ comment, onAddComment }: CommentProps) => {
  return (
    <>
      <div className="flex items-center justify-between gap-x-2 mb-3 border-b border-secondary-200 pb-3">
        <div className="flex items-center gap-x-2 w-full">
          <Avatar
            width={32}
            src={comment.user?.avatarUrl}
          />
          <div className="flex flex-col">
            <span className="text-xs lg:text-sm font-medium text-secondary-600">
              {comment.user.name}
            </span>
            <span className="text-xs text-secondary-500">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
              onClick={onAddComment}
              variant="secondary"
              className="text-xs"
            >
              <ArrowUturnRightIcon className="w-4 h-4" />
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className="text-secondary-700 text-sm lg:text-base break-all">
        {comment.content.text}
      </p>
    </>
  );
};

export default Comment;