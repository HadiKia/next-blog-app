import { TrashIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";

const ConfirmDelete = ({ onClose, disabled, onConfirm }) => {
  return (
    <form onSubmit={onConfirm}>
      <div className="flex items-center justify-between gap-x-4 md:gap-x-6">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="flex-1"
        >
          لغو
        </Button>
        <Button
          type="submit"
          variant="danger"
          onClick={onConfirm}
          disabled={disabled}
          className="flex-1"
        >
          {disabled ? (
            <SpinnerMini />
          ) : (
            <>
              <TrashIcon className="w-5 h-5 mb-0.5" />
              <span>حذف</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default ConfirmDelete;
