"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import deleteCategory from "../_actions/deleteCategory";
import Link from "next/link";
import Button from "@/ui/Button";

export const DeleteCategory = ({ title, id: categoryId }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(deleteCategory, {
    error: "",
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsOpen(false);
      router.refresh();
    }
    if (state?.error) {
      toast.error(state.error);
    }
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
        description={`آیا از حذف دسته‌بندی ${title} مطمئن هستید؟`}
      >
        <ConfirmDelete
          onClose={() => setIsOpen(false)}
          action={(formData) => formAction({ formData, categoryId })}
        />
      </Modal>
    </>
  );
};

export const CreateCategory = () => {
  return (
    <Link href="/admin/categories/create">
      <Button variant="primary">
        <div className="flex items-center gap-x-1">
          <span>ایجاد</span>
          <span className="hidden md:block">دسته‌بندی</span>
        </div>
        <PlusIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </Button>
    </Link>
  );
};
