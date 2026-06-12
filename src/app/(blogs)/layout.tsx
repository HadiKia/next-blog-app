import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import type { ReactNode } from "react";

type BlogsLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: BlogsLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="container xl:max-w-screen-xl min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;