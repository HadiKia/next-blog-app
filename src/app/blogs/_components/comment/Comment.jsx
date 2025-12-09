import Avatar from "@/ui/Avatar";
import Button from "@/ui/Button";
import { ArrowUturnRightIcon } from "@heroicons/react/24/outline";

const Comment = ({ comment, onAddComment }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-5 border-b border-secondary-200 pb-2">
        <div className="flex items-center gap-x-2">
          <Avatar
            width={24}
            alt={comment.user?.name || "-"}
            src={comment.user.avatarUrl}
          />
          <div className="text-sm w-full text-secondary-600">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block text-secondary-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <Button
            // onClick={onAddComment}
              variant="secondary"
              className="text-xs"
            >
              <ArrowUturnRightIcon className="w-4 h-4" />
              <span>پاسخ</span>
            </Button>
          )}
        </div>
      </div>
      <p className="text-secondary-700 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </>
  );
};

export default Comment;
