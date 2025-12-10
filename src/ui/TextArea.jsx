const TextArea = ({
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired = false,
  className,
  placeholder
}) => {
  return (
    <div className="textField">
      <label
        htmlFor={name}
        className="text-secondary-600 text-sm inline-block mb-1"
      >
        {label}
        {isRequired && <span className="text-error-500 ms-1">*</span>}
      </label>
      <textarea
        name={name}
        id={name}
        dir={dir}
        className={`textField__input scrollbar-thin scrollbar-thumb-primary-200 scrollbar-track-transparent scrollbar-thumb-rounded-xl resize-none h-32 ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
