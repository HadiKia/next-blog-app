import Breadcrumbs from "@/ui/BreadCrumbs";

const Page = () => {
  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <Breadcrumbs
        breadcrumbs={[
        
          {
            label: "بلاگ ها",
            href: "/admin/posts",
          },
          {
            label: "ایجاد بلاگ",
            href: "/admin/posts/create",
            active: true
          },
        ]}
      />
    </div>
  );
};

export default Page;
