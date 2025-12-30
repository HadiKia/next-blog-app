import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import SubmitButton from "./SubmitButton";

const ConfirmDelete = ({ onClose, action }) => {
  return (
    <form action={action}>
      <div className="flex items-center justify-between gap-x-4 md:gap-x-6">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="flex-1"
        >
          لغو
        </Button>
        <SubmitButton variant="danger" className="flex-1">
          <TrashIcon className="w-5 h-5 mb-0.5" />
          <span>حذف</span>
        </SubmitButton>
      </div>
    </form>
  );
};

export default ConfirmDelete;
