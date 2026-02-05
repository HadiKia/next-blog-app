import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Button from "@/ui/Button";
import Empty from "@/ui/Empty";
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
      <div className="container xl:max-w-screen-xl flex flex-col gap-y-10 items-center justify-center mt-10 mb-40">
       <Empty message={" صفحه ای که به دنبال آن بودید پیدا نشد."}/>
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
