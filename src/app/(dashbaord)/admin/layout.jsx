import Header from "./_components/layout/Header";
import Navbar from "./_components/layout/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 lg:bg-secondary-100 ">
      <aside className="lg:col-span-2 sticky top-0 z-[2] lg:bg-secondary-100">
        <Navbar />
      </aside>
      <main className="col-span-12 lg:col-span-10">
        <Header />
        <div className="bg-app lg:rounded-tr-3xl min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
