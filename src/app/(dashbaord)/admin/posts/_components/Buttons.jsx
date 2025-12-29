"use client";

import useDeletePost from "@/hooks/useDeletePost";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const DeletePost = ({ post: { _id: id, title } }) => {
  const [open, setIsOpen] = useState(false);
  const { isDeleting, deletePost } = useDeletePost();
  const router = useRouter();

  return (
    <>
      <ButtonIcon variant="error" onClick={() => setIsOpen(true)}>
        <TrashIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </ButtonIcon>
      <Modal
        open={open}
        onClose={() => setIsOpen(false)}
        title={`حذف ${title}`}
        description={`آیا از حذف ${title} مطمئن هستید؟`}
      >
        <ConfirmDelete
          disabled={isDeleting}
          onClose={() => setIsOpen(false)}
          onConfirm={(e) => {
            e.preventDefault();
            deletePost(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh("/admin/posts");
                },
              }
            );
          }}
        />
      </Modal>
    </>
  );
};

export const UpdatePost = ({ id }) => {
  return (
    <Link href={`/admin/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilSquareIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </ButtonIcon>
    </Link>
  );
};

export const CreatePost = () => {
  return (
    <Link href="/admin/posts/create">
      <Button variant="primary">
        <div className="flex items-center gap-x-1">
          <span>ایجاد</span>
          <span className="hidden md:block">بلاگ</span>
        </div>
        <PlusIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </Button>
    </Link>
  );
};
