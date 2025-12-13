const Layout = ({ children }) => {
  return (
    <div className="grid place-items-center py-10">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
};

export default Layout;
