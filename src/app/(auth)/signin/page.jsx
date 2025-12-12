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
    email: yup
      .string()
      .email("ایمیل وارد شده نامعتبر است.")
      .required("ایمیل الزامی است."),
    password: yup
      .string()
      .required("رمز عبور الزامی است.")
      .min(8, "حداقل ۸ کاراکتر لازم است."),
  })
  .required();

const SignIn = () => {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isLoading, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const { signin } = useAuth();

  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h2 className="text-primary-900 text-xl lg:text-2xl mb-6 font-bold text-center">
        ورود به حساب کاربری
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button
          disabled={!isValid || isLoading}
          variant="primary"
          className="mt-4"
        >
          {isLoading ? <SpinnerMini /> : " ورود"}
        </Button>
      </form>
      <div className="flex items-center justify-center gap-x-3 text-base mt-8">
        <span className="text-secondary-500">حساب کاربری ندارید؟</span>
        <Link
          href="/signup"
          className="text-primary-800 font-semibold hover:text-primary-900 duration-300 ease-out"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
