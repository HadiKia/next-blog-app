import { getPosts } from "@/services/postServices";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import Empty from "@/ui/Empty";

const PostsTable = async ({ query = "" }) => {
  const { posts } = await getPosts(query);

  if (!posts.length) return <Empty message={"بلاگ مرتبط پیدا نشد."} />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته‌بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>آخرین بروزرسانی</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default PostsTable;
