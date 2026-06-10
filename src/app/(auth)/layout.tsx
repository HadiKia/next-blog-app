import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: AuthLayoutProps) => {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl grid place-items-center mt-20 mb-40">
        <div className="w-full max-w-md">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;