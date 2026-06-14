"use client";

import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import deleteComment from "../_actions/deleteComment";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import EditCommentForm from "./EditCommentForm";
import type { Comment, ID, ServerActionState } from "@/types";

type DeleteCommentProps = {
  id: ID;
};

type UpdateCommentProps = {
  comment: Comment;
};

const initialState: ServerActionState = {
  error: "",
  message: "",
};

export const DeleteComment = ({ id: commentId }: DeleteCommentProps) => {
  const router = useRouter();
  const [state, formAction] = useActionState(deleteComment, initialState);
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
        title="حذف نظر"
        description="آیا از حذف نظر مطمئن هستید؟"
      >
        <ConfirmDelete
          onClose={() => setIsOpen(false)}
          action={async (formData) =>
            await formAction({ formData, commentId })
          }
        />
      </Modal>
    </>
  );
};

export const UpdateComment = ({ comment }: UpdateCommentProps) => {
  const router = useRouter();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="w-5 h-5 lg:w-6 lg:h-6" />
      </ButtonIcon>
      <Modal
        className="overflow-visible"
        title="ویرایش نظر"
        open={isEditOpen}
        onClose={onClose}
      >
        <EditCommentForm onClose={onClose} comment={comment} router={router} />
      </Modal>
    </>
  );
};