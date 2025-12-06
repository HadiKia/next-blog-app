const TextField = ({
  type = "text",
  label,
  name,
  value,
  dir = "rtl",
  onChange,
  isRequired,
  className,
  placeholder,
}) => {
  return (
    <div className="textField">
      <label htmlFor="name" className="text-secondary-600 text-sm inline-block mb-1">
        {label}
        {isRequired && <span className="text-error-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        } ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
