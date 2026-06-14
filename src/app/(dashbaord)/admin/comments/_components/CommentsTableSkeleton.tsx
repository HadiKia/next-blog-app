import Table from "@/ui/Table";

const CommentsTableSkeleton = () => {
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
        {[...Array(5)].map((_, index) => (
          <Table.Row key={index}>
            {[...Array(7)].map((_, index) => (
              <td
                key={index}
                className="bg-secondary-100 h-16 animate-pulse pointer-events-none"
              ></td>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CommentsTableSkeleton;
