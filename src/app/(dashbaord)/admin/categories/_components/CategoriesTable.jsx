import Table from "@/ui/Table";
import CategoryRow from "./CategoryRow";
import { getCategoryApi } from "@/services/categoryService";

const CategoriesTable = async () => {
  const { categories } = await getCategoryApi();
  if (!categories.length) return <p>دسته‌بندی پیدا نشد.</p>;

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
        {categories.map((category, index) => (
          <CategoryRow key={category._id} category={category} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
};

export default CategoriesTable;
