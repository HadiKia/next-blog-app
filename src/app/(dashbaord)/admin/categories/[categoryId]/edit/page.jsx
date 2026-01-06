import Breadcrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../../_components/CreateCategoryForm";
import { getCategoryById } from "@/services/categoryService";
import { notFound } from "next/navigation";

const EditPage = async ({ params }) => {
  const { categoryId } = await params;
  const { category } = await getCategoryById(categoryId);

  if (!category) return notFound();

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "دسته‌بندی ها",
            href: "/admin/categories",
          },
          {
            label: "ویرایش دسته‌بندی",
            href: `/admin/categories/${categoryId}/edit`,
            active: true,
          },
        ]}
      />

      <CreateCategoryForm categoryToEdit={category} />
    </div>
  );
};

export default EditPage;
