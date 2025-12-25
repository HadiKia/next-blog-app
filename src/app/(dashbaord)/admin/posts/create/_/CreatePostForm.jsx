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

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

const schema = yup
  .object({
    title: yup.string().required("وارد کردن عنوان الزامی است."),
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

const CreatePostForm = () => {
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(null);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isLoading, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  useEffect(() => {
    return () => {
      if (coverImageUrl) {
        URL.revokeObjectURL(coverImageUrl);
      }
    };
  }, [coverImageUrl]);

  return (
    <div>
      <h2 className="text-primary-900 text-xl lg:text-2xl mb-6 font-bold">
        ایجاد بلاگ جدید
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFTextField
          name="title"
          label="عنوان بلاگ"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان بلاگ جدید"
        />
        <RHFTextField
          name="title"
          label="عنوان بلاگ"
          isRequired
          register={register}
          errors={errors}
          placeholder="عنوان بلاگ جدید"
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

        <RHFSelect
          name="category"
          label="دسته بندی"
          isRequired
          register={register}
          errors={errors}
          options={categories}
          placeholder="دسته بندی مورد نظر را انتخاب کنید"
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
                  setValue("coverImage", null);
                }}
              />
            );
          }}
        />
      </form>
    </div>
  );
};

export default CreatePostForm;
