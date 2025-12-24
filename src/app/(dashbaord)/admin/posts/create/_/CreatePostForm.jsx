"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RHFTextField from "@/ui/RHFTextFiled";
import RHFSelect from "@/ui/RHFSelect";
import useCategories from "@/hooks/useCategories";

const schema = yup
  .object({
    title: yup.string().required("وارد کردن عنوان الزامی است."),
    category: yup.string().required("وارد کردن عنوان الزامی است."),
  })
  .required();

const CreatePostForm = () => {
  const { categories } = useCategories();
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = (values) => {
    console.log(values);
  };

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
      </form>
    </div>
  );
};

export default CreatePostForm;
