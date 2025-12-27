import { ArrowUpTrayIcon, TrashIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ButtonIcon from "./ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";

function FileInput({
  accept,
  label,
  placeholder,
  name,
  dir = "rtl",
  onChange,
  onRemove,
  isRequired,
  className,
  errors,
  previewUrl,
  fileMeta,
  wrapperClassName,
  ...rest
}) {
  const hasError = !!errors?.[name];

  const inputClasses = [
    "textField__input flex items-center justify-center gap-x-2 text-secondary-500 hover:text-secondary-800 py-14 cursor-pointer",
    hasError &&
      "focus:ring-error-100 hover:border-error-500 focus:border-error-500 border-error-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClassName}>
      <span className="text-secondary-600 text-sm mb-2 inline-block">
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </span>

      {previewUrl ? (
        <div className="w-full p-3 lg:p-5 rounded-lg text-secondary-800 border border-secondary-300 flex items-center justify-between gap-x-4">
          <div className="flex items-start gap-x-4 lg:gap-x-6 w-full ">
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square sm:aspect-video overflow-hidden rounded-md w-full min-w-20 max-w-20 sm:min-w-40 sm:max-w-40 lg:min-w-60 lg:max-w-60 max-h-32 cursor-zoom-in "
            >
              <Image
                fill
                alt={label}
                src={previewUrl}
                className="object-cover object-center"
              />
            </a>

            <div className="flex flex-col gap-y-2 lg:gap-y-3">
              <span className="text-sm lg:text-lg font-medium text-secondary-700 text-wrap">
                {fileMeta?.name}
              </span>
              <span className="text-xs lg:text-base text-secondary-500">
                {toPersianDigits(fileMeta?.size)}
              </span>
            </div>
          </div>
          {onRemove && (
            <ButtonIcon
              type="button"
              variant="error"
              onClick={onRemove}
              className="w-8 h-8 "
            >
              <TrashIcon />
            </ButtonIcon>
          )}
        </div>
      ) : (
        <label htmlFor={`file-upload-${name}`} className={inputClasses}>
          {placeholder}
          <ArrowUpTrayIcon className="w-5 h-5" />
          <input
            accept={accept}
            id={`file-upload-${name}`}
            type="file"
            className="sr-only"
            name={name}
            dir={dir}
            onChange={onChange}
            {...rest}
            disabled={!!previewUrl}
          />
        </label>
      )}

      {hasError && (
        <span className="text-error-500 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default FileInput;
