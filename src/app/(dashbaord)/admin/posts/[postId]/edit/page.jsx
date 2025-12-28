import Breadcrumbs from "@/ui/Breadcrumbs";
import React from "react";
import CreatePostForm from "../../_components/CreatePostForm";
import { getPostById } from "@/services/postServices";
import { notFound } from "next/navigation";

const EditPage = async ({ params }) => {
  const { postId } = await params;
  const { post } = await getPostById(postId);

  if (!post) return notFound();

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "بلاگ ها",
            href: "/admin/posts",
          },
          {
            label: "ویرایش بلاگ",
            href: `/admin/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />

      <CreatePostForm postToEdit={post} />
    </div>
  );
};

export default EditPage;
