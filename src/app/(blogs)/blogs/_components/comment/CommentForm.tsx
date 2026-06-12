"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import type { ServerActionState, ID } from "@/types";

type CommentFormProps = {
  postId: ID;
  parentId?: ID | null;
  onClose: () => void;
};

const initialState: ServerActionState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }: CommentFormProps) => {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
  }, [state, onClose]);

  return (
    <form
      action={async (formData) => {
        await formAction({ formData, postId, parentId });
      }}
    >
      <TextArea
        name="text"
        label="نظر شما"
        value={text}
        isRequired
        onChange={(e) => setText(e.target.value)}
        error={state.error}
      />
      <SubmitButton>تایید</SubmitButton>
    </form>
  );
};

export default CommentForm;
