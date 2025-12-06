import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const RHFTextField = ({
  type = "text",
  dir = "rtl",
  label,
  isRequired,
  className,
  placeholder,
  name,
  register,
  errors,
  validationSchema = {},
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const currentType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : type;

  const errorMessages = errors?.[name];
  const hasError = !!(errors && errorMessages);

  return (
    <div>
      <label
        htmlFor={name}
        className="text-secondary-600 text-sm inline-block mb-1"
      >
        {label}
        {isRequired && <span className="text-error-500">*</span>}
      </label>

      <div className="relative">
        <input
          autoComplete="off"
          type={currentType}
          id={name}
          dir={dir}
          className={`textField__input ${
            dir === "ltr" ? "text-left" : "text-right"
          } ${className} ${
            hasError ? "focus:outline-error-200 border-error-300" : ""
          } ${isPasswordField ? "ps-10" : ""}`}
          {...register(name, validationSchema)}
          placeholder={placeholder}
          {...rest}
        />

        {isPasswordField && (
          <span
            className="absolute end-4 top-3 lg:top-3.5 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <EyeIcon className="w-4 h-4 text-secondary-900" />
            ) : (
              <EyeSlashIcon className="w-4 h-4 text-secondary-900" />
            )}
          </span>
        )}
      </div>

      {hasError && (
        <span className="text-error-500 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
};

export default RHFTextField;
