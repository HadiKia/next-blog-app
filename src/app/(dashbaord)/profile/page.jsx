"use client";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { formatFileSize } from "@/utils/formatFileSize";
import RHFTextField from "@/ui/RHFTextFiled";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import FileInput from "@/ui/FileInput";
import useEditProfile from "@/hooks/useEditProfile";

const MAX_FILE_SIZE = 20 * 1024 * 1024; // 20MB

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد.")
      .max(30, "نام و نام خانوادگی باید کمتر از ۳۰ کاراکتر باشد.")
      .required("نام و نام‌ خانوادگی الزامی است."),
    email: yup
      .string()
      .email("ایمیل وارد شده نامعتبر است.")
      .required("ایمیل الزامی است."),
    avatar: yup
      .mixed()
      .test(
        "fileSize",
        "حجم فایل انتخاب شده باید کمتر از ۲۰ مگابایت باشد",
        (value) => {
          if (!value) return true;
          return value instanceof File && value.size <= MAX_FILE_SIZE;
        },
      ),
  })
  .required();

const Profile = () => {
  const [avatarImageUrl, setAvatarImageUrl] = useState(null);
  const { editProfile, isEditing } = useEditProfile();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10 ">
      <h2 className="text-2xl font-bold text-secondary-700 mb-6">
        حساب کاربری
      </h2>

      <form className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start">
        <RHFTextField
          name="name"
          label="نام و نام خانوادگی"
          isRequired
          register={register}
          errors={errors}
          placeholder="نام و نام خانوادگی خود را وارد کنید"
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          isRequired
          register={register}
          errors={errors}
          placeholder="ایمیل خود را وارد کنید"
          dir="ltr"
        />

        <Controller
          name="avatar"
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
                name="avatar"
                label="عکس پروفایل"
                placeholder="عکس خود را آپلود کنید"
                errors={errors}
                previewUrl={avatarImageUrl}
                fileMeta={fileMeta}
                {...rest}
                wrapperClassName={"lg:col-span-2"}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (!file) {
                    setValue("avatar", null, { shouldValidate: false });
                    event.target.value = null;
                    return;
                  }

                  if (file.size > MAX_FILE_SIZE) {
                    setValue("avatar", file, { shouldValidate: true });
                    event.target.value = null;
                    return;
                  }

                  onChange(file);

                  if (avatarImageUrl) URL.revokeObjectURL(avatarImageUrl);
                  setAvatarImageUrl(URL.createObjectURL(file));

                  event.target.value = null;
                }}
                onRemove={() => {
                  if (avatarImageUrl) URL.revokeObjectURL(avatarImageUrl);
                  setAvatarImageUrl(null);
                  setValue("avatar", null, { shouldValidate: false });
                }}
              />
            );
          }}
        />

        <Button
          type="submit"
          disabled={!isValid || isEditing}
          variant="primary"
          className="mt-4 lg:col-start-2 "
        >
          {isEditing ? <SpinnerMini /> : "ویرایش پروفایل"}
        </Button>
      </form>
    </div>
  );
};

export default Profile;
