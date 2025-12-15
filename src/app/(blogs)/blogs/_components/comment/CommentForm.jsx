"use client";

import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

const CommentForm = ({ postId, parentId, onClose }) => {
  const [text, setText] = useState("");

  const [state, formAction] = useActionState(createComment, initialState);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
  }, [state]);

  return (
    <form
      // action={createComment.bind(null, postId, parentId)}
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

      <SubmitButton>تأیید</SubmitButton>
    </form>
  );
};

export default CommentForm;
