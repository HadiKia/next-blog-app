"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import deleteComment from "../actions/deleteComment";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const DeleteComment = ({ id: commentId }) => {
  const router = useRouter();
  const [state, formAction] = useActionState(deleteComment, {
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
        title={`حذف نظر`}
        description={`آیا از حذف نظر مطمئن هستید؟`}
      >
        <ConfirmDelete
          onClose={() => setIsOpen(false)}
          action={(formData) => formAction({ formData, commentId })}
        />
      </Modal>
    </>
  );
};

export default DeleteComment;
