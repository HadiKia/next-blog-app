"use client";

import useCreateCategory from "@/hooks/useCreateCategory";
import useEditCategory from "@/hooks/useEditCategory";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextFiled";
import SpinnerMini from "@/ui/SpinnerMini";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const PERSIAN_TEXT_REGEX = /^(?!.*\s{2})[\u0600-\u06FF۰-۹\u200C\s-_]+$/;
const ENGLISH_TEXT_REGEX = /^(?!.*\s{2})[A-Za-z0-9\s-_]+$/;

const schema = yup
  .object({
    title: yup
      .string()
      .matches(
        PERSIAN_TEXT_REGEX,
        "فقط از حروف فارسی، اعداد و کاراکترهای مجاز استفاده کنید."
      )
      .min(5, "حداقل ۵ کاراکتر وارد کنید.")
      .required("وارد کردن عنوان الزامی است."),
    englishTitle: yup
      .string()
      .matches(
        ENGLISH_TEXT_REGEX,
        "فقط از حروف انگلیسی، اعداد و کاراکترهای مجاز استفاده کنید."
      )
      .min(5, "حداقل ۵ کاراکتر وارد کنید.")
      .required("وارد کردن عنوان انگلیسی الزامی است."),
    description: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر وارد کنید.")
      .required("وارد کردن توضیحات الزامی است."),
  })
  .required();

const CreateCategoryForm = ({ categoryToEdit = {} }) => {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);
  const { title, englishTitle, description } = categoryToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
    };
  }

  const { createCategory, isCreating } = useCreateCategory();
  const { editCategory, isEditing } = useEditCategory();

  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  const onSubmit = (data) => {
    if (isEditSession) {
      editCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            reset();
            router.push("/admin/categories");
          },
        }
      );
    } else {
      createCategory(data, {
        onSuccess: () => router.push("/admin/categories"),
      });
    }
  };

  const pageTitle = isEditSession ? "ویرایش دسته‌بندی" : "ایجاد دسته‌بندی جدید";
  const submitLabel = isEditSession ? "ویرایش دسته‌بندی" : "ایجاد دسته‌بندی";
  const isSubmitting = isEditSession ? isEditing : isCreating;

  return (
    <div>
      <h2 className="text-primary-900 text-xl lg:text-2xl mb-6 font-bold">
        {pageTitle}
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
      >
        <RHFTextField
          name="title"
          label="عنوان"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان دسته‌بندی"
        />
        <RHFTextField
          name="englishTitle"
          label="عنوان انگلیسی"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان انگلیسی دسته‌بندی"
        />
        <RHFTextField
          name="description"
          label="توضیحات"
          isRequired
          register={register}
          errors={errors}
          placeholder="توضیحات دسته‌بندی"
          wrapperClassName="lg:col-span-2"
        />

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          variant="primary"
          className="mt-4 lg:col-start-2 "
        >
          {isSubmitting ? <SpinnerMini /> : submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default CreateCategoryForm;
