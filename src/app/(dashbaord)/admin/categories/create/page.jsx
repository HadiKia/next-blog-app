import Breadcrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../_components/CreateCategoryForm";

const Page = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "دسته‌بندی ها",
            href: "/admin/categories",
          },
          {
            label: "ایجاد دسته‌بندی",
            href: "/admin/categories/create",
            active: true,
          },
        ]}
      />

      <CreateCategoryForm />
    </div>
  );
};

export default Page;
