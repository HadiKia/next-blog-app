"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextFiled";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import SpinnerMini from "@/ui/SpinnerMini";

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

  const { signup } = useAuth();

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h2 className="text-primary-900 text-xl lg:text-2xl mb-6 font-bold text-center">
        ایجاد حساب کاربری
      </h2>
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
          showPasswordChecks={true}
        />
        <Button
          disabled={!isValid || isLoading}
          variant="primary"
          className="mt-4"
        >
          {isLoading ? <SpinnerMini /> : " ثبت نام"}
        </Button>
      </form>
      <div className="flex items-center justify-center gap-x-3 text-base mt-8">
        <span className="text-secondary-500">حساب کاربری دارید؟</span>
        <Link
          href="/signin"
          className="text-primary-800 font-semibold hover:text-primary-900 duration-300 ease-out"
        >
          ورود
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
