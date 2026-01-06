import Button from "@/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "صفحه پیدا نشد.",
  },
  description: "صفحه ای که به دنبال آن بودید پیدا نشد.",
};

const NotFound = () => {
  return (
    <div className="container xl:max-w-screen-xl flex flex-col items-center justify-center my-56">
      <h2 className="text-2xl font-bold text-secondary-700 mb-12 text-center">
        دسته‌بندی با این مشخصات پیدا نشد.
      </h2>
      <Link href="/admin/categories">
        <Button variant="primary">
          <ArrowRightIcon className="w-5 h-5 mb-0.5" />
          <span>بازگشت</span>
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
