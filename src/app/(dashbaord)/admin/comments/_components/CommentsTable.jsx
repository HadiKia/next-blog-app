import { getAllCommentsApi } from "@/services/commentService";
import Table from "@/ui/Table";
import { Fragment } from "react";
import CommentRow from "./CommentRow";
import Empty from "@/ui/Empty";

async function CommentsTable() {
  const { comments, commentsCount } = await getAllCommentsApi();
  if (!comments.length) return <Empty message={"نظری پیدا نشد."} />;

  let iterator = 0;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>متن</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>آخرین بروزرسانی</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {comments.map((comment) => {
          iterator++;
          return (
            <Fragment key={comment._id}>
              <CommentRow
                key={comment._id}
                comment={comment}
                index={iterator}
              />
              {comment.answers.map((commentAnswer) => {
                iterator++;
                return (
                  <CommentRow
                    key={commentAnswer._id}
                    comment={commentAnswer}
                    index={iterator}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </Table.Body>
    </Table>
  );
}
export default CommentsTable;
