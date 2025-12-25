const btnType = {
  primary:
    "bg-primary-100 text-primary-700 hover:bg-primary-900 hover:text-white",
  secondary:
    "bg-secondary-200 text-secondary-500 hover:bg-secondary-500 hover-text-secondary-0",
  outline:
    "border border-secondary-300 text-secondary-700 hover:bg-secondary-100",
  error:
    "border border-error-300 text-error-500 hover:bg-error-50",
};

const ButtonIcon = ({ children, onClick, className, variant, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`${btnType[variant]}
        ${className}
        flex items-center justify-center gap-x-1 rounded-md p-1 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:text-inherit text-xs lg:text-sm transition-all duration-300 ease-linear`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
