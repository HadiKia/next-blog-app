import Table from "@/ui/Table";

const UsersTableSkeleton = () => {
  return (
    <Table>
      <Table.Header>
        <th className="w-20">#</th>
        <th>نام و نام خانوادگی</th>
        <th>ایمیل</th>
        <th>سطح دسترسی</th>
        <th>تاریخ ایجاد</th>
        <th>آخرین بروزرسانی</th>
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

export default UsersTableSkeleton;
