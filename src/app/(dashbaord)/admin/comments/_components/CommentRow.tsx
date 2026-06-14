import Table from "@/ui/Table";
import { toLocalDateShort } from "@/utils/dateFormatter";
import truncateText from "@/utils/truncateText";
import { DeleteComment, UpdateComment } from "./Buttons";
import type { Comment, BadgeStyle, CommentStatus } from "@/types";

type CommentRowProps = {
  index: number;
  comment: Comment;
};

const statusStyle: Record<CommentStatus, BadgeStyle> = {
  0: { label: "رد شده", className: "badge--danger" },
  1: { label: "در انتظار تایید", className: "badge--secondary" },
  2: { label: "تایید شده", className: "badge--success" },
};

function CommentRow({ index, comment }: CommentRowProps) {
  const {
    content: { text },
    _id,
    user,
    status,
    createdAt,
    updatedAt,
  } = comment;

  return (
    <Table.Row>
      <td>{index}</td>
      <td>{truncateText(text, 30)}</td>
      <td>{user?.name}</td>
      <td>{toLocalDateShort(createdAt)}</td>
      <td>{toLocalDateShort(updatedAt)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-2">
          <UpdateComment comment={comment} />
          <DeleteComment id={_id} />
        </div>
      </td>
    </Table.Row>
  );
}

export default CommentRow;
