import { useFormStatus } from "react-dom";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const SubmitButton = ({ children, className, ...rest }) => {
    const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...rest} className={className}>
      {pending ? <SpinnerMini /> : children}
    </Button>
  );
};

export default SubmitButton;
