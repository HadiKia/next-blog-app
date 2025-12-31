import RHFSelect from "@/ui/RHFSelect";
import SubmitButton from "@/ui/SubmitButton";
import { useActionState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import updateComment from "../actions/updateComment";
import toast from "react-hot-toast";

const options = [
  {
    id: 1,
    label: "رد شده",
    value: 0,
  },
  {
    id: 2,
    label: "در انتظار تایید",
    value: 1,
  },
  {
    id: 3,
    label: "تایید شده",
    value: 2,
  },
];

const EditCommentForm = ({ comment, onClose, router }) => {
  const [state, formAction] = useActionState(updateComment, {
    error: "",
    message: "",
  });

  const { control } = useForm({
    defaultValues: { status: comment.status },
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      router.refresh();
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <form
      action={(formData) => {
        formAction({ formData, commentId: comment._id });
      }}
    >
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <RHFSelect
            name="status"
            label="تغییر وضعیت"
            placeholder="گزینه مورد نظر را انتخاب کنید"
            options={options}
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error}
          />
        )}
      />

      <SubmitButton variant="primary">تایید</SubmitButton>
    </form>
  );
};

export default EditCommentForm;
