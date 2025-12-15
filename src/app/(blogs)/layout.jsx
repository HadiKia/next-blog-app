import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Layout = ({ children }) => {
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
