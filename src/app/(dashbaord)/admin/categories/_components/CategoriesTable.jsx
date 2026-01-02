import Table from "@/ui/Table";
import CategoryRow from "./CategoryRow";
import { getCategoryApi } from "@/services/categoryService";

const CategoriesTable = async () => {
  const { categories } = await getCategoryApi();
  if (!categories.length) return <p>دسته‌بندی پیدا نشد.</p>;

  let iterator = 0;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>عنوان انگلیسی</th>
        <th>توضیحات</th>
        <th>اسلاگ</th>
        <th>تاریخ ایجاد</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {categories.map((category) => {
          iterator++;
          return (
            <CategoryRow
              key={category._id}
              category={category}
              index={iterator}
            />
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default CategoriesTable;
