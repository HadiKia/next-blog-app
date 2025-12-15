import Button from "@/ui/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="container xl:max-w-screen-xl">
        <div className="flex flex-col items-center justify-center pt-32">
          <p className="text-2xl font-bold text-secondary-700 mb-12">
            پستی با این مشخصات پیدا نشد.
          </p>
          <Button variant="primary">
            <Link href="/blogs" className="flex items-center gap-x-2">
              <ArrowRightIcon className="w-5 h-5 mb-0.5" />
              <span>رفتن به صفحه پست‌ها</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
