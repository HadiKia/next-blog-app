"use client";

import { Controller, useForm, type Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextFiled";
import RHFSelect from "@/ui/RHFSelect";
import useCategories from "@/hooks/useCategories";
import { useEffect, useState } from "react";
import FileInput from "@/ui/FileInput";
import { formatFileSize } from "@/utils/formatFileSize";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import useCreatePost from "@/hooks/useCreatePost";
import { useRouter } from "next/navigation";
import useEditPost from "@/hooks/useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";
import RHFRichTextEditor from "@/ui/RHFRichTextEditor";
import type { Post, PostFormValues } from "@/types";

const MAX_FILE_SIZE = 20 * 1024 * 1024;

const schema = yup.object({
  title: yup
    .string()
    .min(5, "حداقل ۵ کاراکتر وارد کنید.")
    .required("وارد کردن عنوان الزامی است."),
  briefText: yup
    .string()
    .min(10, "حداقل ۱۰ کاراکتر وارد کنید.")
    .required("وارد کردن متن کوتاه الزامی است."),
  text: yup
    .string()
    .test(
      "min-text",
      "حداقل ۱۰۰ کاراکتر وارد کنید",
      (value) =>
        !!value && value.replace(/<[^>]*>/g, "").trim().length >= 100,
    )
    .required("وارد کردن محتوا الزامی است."),
  readingTime: yup
    .number()
    .positive()
    .integer()
    .required("وارد کردن زمان مطالعه الزامی است.")
    .typeError("یک عدد را وارد کنید."),
  slug: yup.string().required("وارد کردن اسلاگ الزامی است."),
  category: yup.string().required("وارد کردن دسته بندی الزامی است."),
  coverImage: yup
    .mixed<File>()
    .required("کاور بلاگ الزامی است.")
    .test("fileSize", "حجم فایل انتخاب شده باید کمتر از ۲۰ مگابایت باشد", (value) =>
      value instanceof File && value.size <= MAX_FILE_SIZE,
    ),
}).required();

type CreatePostFormProps = {
  postToEdit?: Partial<Post>;
};

const CreatePostForm = ({ postToEdit = {} }: CreatePostFormProps) => {
  const { _id: editId, coverImageUrl: prevCoverImageUrl } = postToEdit;
  const isEditSession = Boolean(editId);

  const editValues: Partial<PostFormValues> = isEditSession
    ? {
        title: postToEdit.title,
        briefText: postToEdit.briefText,
        text: postToEdit.text,
        readingTime: postToEdit.readingTime,
        slug: postToEdit.slug,
        category: postToEdit.category?._id,
        coverImage: null,
      }
    : {};

  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState<string | null>(
    prevCoverImageUrl || null,
  );
  const { createPost, isCreating } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isLoading, isValid },
  } = useForm<PostFormValues>({
    resolver: yupResolver(schema) as unknown as Resolver<PostFormValues>,
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImageUrl) {
      async function fetchImage() {
        const file = await imageUrlToFile(prevCoverImageUrl as string);
        setValue("coverImage", file, { shouldValidate: true });
      }
      fetchImage();
    }
  }, [editId, prevCoverImageUrl, setValue]);

  const onSubmit = (data: PostFormValues) => {
    const formData = new FormData();
    for (const key in data) {
      const value = data[key as keyof PostFormValues];
      if (value !== null && value !== undefined) {
        formData.append(key, value as string | Blob);
      }
    }

    if (isEditSession && editId) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/admin/posts");
          },
        },
      );
    } else {
      createPost(formData, {
        onSuccess: () => router.push("/admin/posts"),
      });
    }
  };

  useEffect(() => {
    return () => {
      if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
    };
  }, [coverImageUrl]);

  const pageTitle = isEditSession ? "ویرایش بلاگ" : "ایجاد بلاگ جدید";
  const submitLabel = isEditSession ? "ویرایش بلاگ" : "ایجاد بلاگ";
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
          label="عنوان بلاگ"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان بلاگ مورد نظر"
        />
        <RHFTextField
          name="slug"
          label="اسلاگ"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان اسلاگ"
        />
        <RHFTextField
          name="readingTime"
          label="زمان مطالعه"
          isRequired
          register={register}
          errors={errors}
          placeholder="زمان مطالعه بلاگ"
        />

        <Controller
          name="category"
          control={control}
          render={({ field, fieldState }) => (
            <RHFSelect
              label="دسته بندی"
              placeholder="دسته بندی مورد نظر را انتخاب کنید"
              options={categories}
              isRequired
              value={field.value as string}
              onChange={field.onChange}
              error={fieldState.error}
            />
          )}
        />

        <RHFTextField
          name="briefText"
          label="متن کوتاه"
          isRequired
          register={register}
          errors={errors}
          placeholder="توضیحات کوتاه قرار گرفته زیر عنوان"
          wrapperClassName="lg:col-span-2"
        />

        <Controller
          name="text"
          control={control}
          render={({ field, fieldState }) => (
            <RHFRichTextEditor
              label="محتوای بلاگ"
              placeholder="محتوای بلاگ"
              isRequired
              wrapperClassName="lg:col-span-2"
              value={field.value as string}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={fieldState.error}
            />
          )}
        />

        <Controller
          name="coverImage"
          control={control}
          render={({ field: { value, onChange, ...rest } }) => {
            const fileValue = value as File | null;
            const fileMeta = fileValue
              ? {
                  name: fileValue.name,
                  size: formatFileSize(fileValue.size),
                }
              : null;

            return (
              <FileInput
                accept="image/*"
                name="coverImage"
                label="کاور بلاگ"
                placeholder="عکس خود را آپلود کنید"
                isRequired
                errors={errors}
                previewUrl={coverImageUrl}
                fileMeta={fileMeta}
                {...rest}
                wrapperClassName="lg:col-span-2"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;

                  if (file.size > MAX_FILE_SIZE) {
                    setValue("coverImage", file, { shouldValidate: true });
                    event.target.value = "";
                    return;
                  }

                  onChange(file);
                  if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
                  setCoverImageUrl(URL.createObjectURL(file));
                  event.target.value = "";
                }}
                onRemove={() => {
                  if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
                  setCoverImageUrl(null);
                  setValue("coverImage", null, { shouldValidate: true });
                }}
              />
            );
          }}
        />

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          variant="primary"
          className="mt-4 lg:col-start-2"
        >
          {isSubmitting ? <SpinnerMini /> : submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default CreatePostForm;