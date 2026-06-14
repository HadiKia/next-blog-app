import Table from "@/ui/Table";

const CategoriesTableSkeleton = () => {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>اسلاگ</th>
        <th>تاریخ ایجاد</th>
        <th>آخرین بروزرسانی</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {[...Array(5)].map((_, index) => (
          <Table.Row key={index}>
            {[...Array(8)].map((_, index) => (
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

export default CategoriesTableSkeleton;
