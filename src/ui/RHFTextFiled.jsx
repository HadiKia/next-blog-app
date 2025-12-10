import {
  CheckCircleIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const RHFTextField = ({
  type = "text",
  dir = "rtl",
  label,
  isRequired,
  className = "",
  placeholder,
  name,
  register,
  errors,
  watch,
  validationSchema = {},
  showPasswordChecks = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = type === "password";
  const currentType = isPasswordField && showPassword ? "text" : type;

  const hasError = !!errors?.[name];

  const togglePassword = () => setShowPassword((prev) => !prev);

  const passwordValue = watch?.(name) || "";

  const passwordChecks = [
    {
      label: "حداقل ۸ کاراکتر",
      check: (value) => value.length >= 8,
    },
    {
      label: "شامل یک حرف بزرگ A تا Z",
      check: (value) => /[A-Z]/.test(value),
    },
    {
      label: "شامل یک حرف کوچک a تا z",
      check: (value) => /[a-z]/.test(value),
    },
    {
      label: "شامل یک عدد ۰ تا ۹",
      check: (value) => /\d/.test(value),
    },
    {
      label: "شامل یک سیمبل (@#$!%?)",
      check: (value) => /[@#$!%?]/.test(value),
    },
  ];

  const inputClasses = [
    "textField__input",
    dir === "ltr" ? "text-left placeholder:text-right" : "text-right",
    isPasswordField && "ps-10",
    hasError &&
      "focus:outline-error-100 hover:border-error-500 focus:border-error-500 border-error-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <label
        htmlFor={name}
        className="text-secondary-600 text-sm inline-block mb-2"
      >
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </label>

      <div className="relative">
        <input
          type={currentType}
          id={name}
          dir={dir}
          autoComplete="off"
          className={inputClasses}
          placeholder={placeholder}
          {...register(name, validationSchema)}
          {...rest}
        />

        {isPasswordField && (
          <span
            className="absolute end-4 top-3 lg:top-3.5 cursor-pointer"
            onClick={togglePassword}
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

      {isPasswordField && showPasswordChecks && (
        <div className="mt-3 space-y-2">
          {passwordChecks.map((rule, index) => {
            const isValid = rule.check(passwordValue);
            return (
              <div
                key={index}
                className={`text-xs lg:text-sm flex items-center gap-x-1 duration-300 ease-out ${
                  isValid ? "text-success-500" : "text-secondary-300"
                }`}
              >
                <CheckCircleIcon className="w-5 h-5" />
                {rule.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RHFTextField;
