import Header from "./_components/header/Header";
import Sidebar from "./_components/sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="grid grid-cols-12 lg:bg-secondary-100 ">
      <aside className="lg:col-span-2 sticky top-0 z-[2] lg:bg-secondary-100">
        <Sidebar />
      </aside>
      <main className="col-span-12 lg:col-span-10">
        <Header />
        <div className="bg-app lg:rounded-tr-3xl min-h-[calc(100vh-80px)]">
          {children}
        </div>
      </main>
    </div>
  );
}
