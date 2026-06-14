"use client";

import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import deletePost from "../_actions/deletePost";
import type { ID, Post, ServerActionState } from "@/types";

type DeletePostProps = {
  post: Pick<Post, "_id" | "title">;
};

type UpdatePostProps = {
  id: ID;
};

const initialState: ServerActionState = {
  error: "",
  message: "",
};

export const DeletePost = ({ post: { _id: postId, title } }: DeletePostProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(deletePost, initialState);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsOpen(false);
      router.refresh();
    }
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <>
      <ButtonIcon variant="error" onClick={() => setIsOpen(true)}>
        <TrashIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </ButtonIcon>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title={`حذف ${title}`}
        description={`آیا از حذف ${title} مطمئن هستید؟`}
      >
        <ConfirmDelete
          onClose={() => setIsOpen(false)}
          action={async (formData) => await formAction({ formData, postId })}
        />
      </Modal>
    </>
  );
};

export const UpdatePost = ({ id }: UpdatePostProps) => {
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