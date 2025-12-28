"use client";

import { Controller, useForm } from "react-hook-form";
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
import useCreatePost from "../../../../../hooks/useCreatePost";
import { useRouter } from "next/navigation";
import useEditPost from "../../../../../hooks/useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

const schema = yup
  .object({
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
      .min(100, "حداقل ۱۰۰ کاراکتر وارد کنید.")
      .required("وارد کردن عنوان الزامی است."),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("وارد کردن زمان مطالعه الزامی است.")
      .typeError("یک عدد را وارد کنید."),
    slug: yup.string().required("وارد کردن اسلاگ الزامی است."),
    category: yup.string().required("وارد کردن دسته بندی الزامی است."),
    coverImage: yup
      .mixed()
      .required("کاور بلاگ الزامی است.")
      .test(
        "fileSize",
        "حجم فایل انتخاب شده باید کمتر از ۲۰ مگابایت باشد",
        (value) => {
          if (!value) return false;
          return value instanceof File && value.size <= MAX_FILE_SIZE;
        }
      ),
  })
  .required();

const CreatePostForm = ({ postToEdit = {} }) => {
  const { _id: editId } = postToEdit;
  const isEditSession = Boolean(editId);
  const {
    title,
    briefText,
    text,
    readingTime,
    slug,
    category,
    coverImage,
    coverImageUrl: prevCoverImageUrl,
  } = postToEdit;

  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      briefText,
      text,
      readingTime,
      slug,
      category: category._id,
      coverImage,
    };
  }

  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(prevCoverImageUrl || null);
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
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevCoverImageUrl) {
      // covert prevLink to file
      async function fetchImage(params) {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file, { shouldValidate: true });
      }
      fetchImage();
    }
  }, [editId]);

  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/admin/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => router.push("/admin/posts"),
      });
    }
  };

  useEffect(() => {
    return () => {
      if (coverImageUrl) {
        URL.revokeObjectURL(coverImageUrl);
      }
    };
  }, [coverImageUrl]);

  const pageTitle = isEditSession ? "ویرایش بلاگ" : "ایجاد بلاگ جدید";
  const submitLabel = isEditSession ? "ویرایش بلاگ" : "ایجاد بلاگ";

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
          name="briefText"
          label="متن کوتاه"
          isRequired
          register={register}
          errors={errors}
          placeholder="توضیحات کوتاه قرار گرفته زیر عنوان"
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
              value={field.value}
              onChange={field.onChange}
              error={fieldState.error}
            />
          )}
        />

        <RHFTextField
          name="text"
          label="محتوای بلاگ"
          isRequired
          register={register}
          errors={errors}
          type="textarea"
          placeholder="محتوای بلاگ"
        />

        <Controller
          name="coverImage"
          control={control}
          render={({ field: { value, onChange, ...rest } }) => {
            const fileMeta = value
              ? {
                  name: value.name,
                  size: formatFileSize(value.size),
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
                wrapperClassName={"lg:col-span-2"}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) return;

                  if (file.size > MAX_FILE_SIZE) {
                    setValue("coverImage", file, { shouldValidate: true });
                    event.target.value = null;
                    return;
                  }

                  onChange(file);

                  if (coverImageUrl) URL.revokeObjectURL(coverImageUrl);
                  setCoverImageUrl(URL.createObjectURL(file));

                  event.target.value = null;
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
          disabled={!isValid || isCreating}
          variant="primary"
          className="mt-4 lg:col-start-2 "
        >
          {isCreating ? <SpinnerMini /> : submitLabel}
        </Button>
      </form>
    </div>
  );
};

export default CreatePostForm;
