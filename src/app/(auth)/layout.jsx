const Layout = ({ children }) => {
  return (
    <div className="grid place-items-center mt-20">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
};

export default Layout;
