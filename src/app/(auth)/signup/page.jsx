"use client";
import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextFiled";
import { useForm } from "react-hook-form";

// export const metadata = {
//   title: "ثبت نام",
// };

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
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
          placeholder="نام و نام خانوادگی خود را وارد کنید"
        />
        <RHFTextField
          name="email"
          label="ایمیل"
          isRequired
          register={register}
          placeholder="ایمیل خود را وارد کنید"
          dir="ltr"
          className="placeholder:text-right"
        />
        <RHFTextField
          name="password"
          label="رمز عبور"
          isRequired
          register={register}
          placeholder="رمز عبور خود را وارد کنید"
          type="password"
          dir="ltr"
          className="placeholder:text-right"
        />
        <Button variant="primary" className="mt-2">
          ثبت نام
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
