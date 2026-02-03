"use client";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { formatFileSize } from "@/utils/formatFileSize";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useAuth } from "@/context/AuthContext";
import useEditProfile from "@/hooks/useEditProfile";
import RHFTextField from "@/ui/RHFTextFiled";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import FileInput from "@/ui/FileInput";
import ProfilePageSkeleton from "./loading";

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
      .notRequired()
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
  const { user, isLoading, getUser } = useAuth();
  const editId = user?._id;

  const isEditSession = Boolean(editId);
  const { name, email, avatar, avatarUrl: prevAvatarImageUrl } = user || {};

  let editValues = {};
  if (isEditSession) {
    editValues = {
      name,
      email,
      avatar,
    };
  }

  const [avatarImageUrl, setAvatarImageUrl] = useState(
    prevAvatarImageUrl || null,
  );
  const { editProfile, isEditing } = useEditProfile();

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  useEffect(() => {
    if (prevAvatarImageUrl) {
      // covert prevLink to file
      async function fetchImage(params) {
        const file = await imageUrlToFile(prevAvatarImageUrl);
        setValue("avatar", file, { shouldValidate: true });
      }
      fetchImage();
    }
  }, [editId]);

  useEffect(() => {
    return () => {
      if (avatarImageUrl) {
        URL.revokeObjectURL(avatarImageUrl);
      }
    };
  }, [avatarImageUrl]);

  useEffect(() => {
    if (!user) {
      getUser();
    } else {
      setValue("name", user.name || "");
      setValue("email", user.email || "");
      setAvatarImageUrl(user.avatarUrl || null);
    }
  }, [user, getUser, setValue]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === "avatar" && data.avatar) {
        if (!(data.avatar instanceof File) && avatarImageUrl) {
          const blob = await (await fetch(avatarImageUrl)).blob();
          const fileName = avatarImageUrl.split("/").pop() || "avatar.jpg";
          formData.append("avatar", new File([blob], fileName));
        } else {
          formData.append("avatar", data.avatar);
        }
      } else {
        formData.append(key, data[key]);
      }
    }

    if (editId) {
      editProfile({ id: editId, data: formData });
    }
  };

  if (isLoading) return <ProfilePageSkeleton />;

  return (
    <div className="px-4 py-8 lg:px-8 lg:py-10 ">
      <h2 className="text-2xl font-bold text-secondary-700 mb-6">
        حساب کاربری
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-start"
      >
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
            const [fileMeta, setFileMeta] = useState(null);

            async function fetchFileSize(url) {
              try {
                const res = await fetch(url, { method: "HEAD" });
                const size = res.headers.get("content-length");
                return size ? formatFileSize(Number(size)) : null;
              } catch (err) {
                console.error("Failed to fetch file size", err);
                return null;
              }
            }

            useEffect(() => {
              let isCurrent = true;

              if (value instanceof File) {
                setFileMeta({
                  name: value.name,
                  size: formatFileSize(value.size),
                });
              } else if (avatarImageUrl) {
                const currentUrl = avatarImageUrl;
                fetchFileSize(currentUrl).then((size) => {
                  if (isCurrent) {
                    setFileMeta({
                      name: currentUrl.split("/").pop(),
                      size: size || "-",
                    });
                  }
                });
              } else {
                setFileMeta(null);
              }

              return () => {
                isCurrent = false;
              };
            }, [value, avatarImageUrl]);

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
                  setValue("avatar", "", {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                }}
              />
            );
          }}
        />

        <Button
          type="submit"
          disabled={!isValid || !isDirty || isEditing}
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
