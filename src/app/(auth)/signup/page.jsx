"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextFiled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupApi } from "@/services/authService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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
    password: yup
      .string()
      .required("رمز عبور الزامی است.")
      .min(8, "حداقل ۸ کاراکتر لازم است.")
      .matches(/[A-Z]/, "باید یک حرف بزرگ A تا Z داشته باشد.")
      .matches(/[a-z]/, "باید یک حرف کوچک a تا z داشته باشد.")
      .matches(/\d/, "باید یک عدد ۰ تا ۹ داشته باشد.")
      .matches(/[@#$!%?]/, "باید یک سیمبل(@#$!%?) داشته باشد."),
  })
  .required();

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isLoading, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const router = useRouter();

  const onSubmit = async (values) => {
    try {
      const { message } = await signupApi(values);
      toast.success(message);
      router.push("/profile");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <h1 className="text-primary-900 text-xl lg:text-2xl mb-4 font-bold ">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <RHFTextField
          name="password"
          label="رمز عبور"
          isRequired
          register={register}
          errors={errors}
          watch={watch}
          placeholder="رمز عبور خود را وارد کنید"
          type="password"
          dir="ltr"
        />
        <Button disabled={!isValid} variant="primary" className="mt-2">
          ثبت نام
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
