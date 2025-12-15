import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
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
    <>
      <Header />
      <div className="container xl:max-w-screen-xl flex flex-col items-center justify-center my-56">
        <h1 className="text-2xl font-bold text-secondary-700 mb-12 text-center">
          صفحه ای که به دنبال آن بودید پیدا نشد.
        </h1>
        <Link href="/">
          <Button variant="primary">
            <ArrowRightIcon className="w-5 h-5 mb-0.5" />
            <span>بازگشت به سایت</span>
          </Button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
