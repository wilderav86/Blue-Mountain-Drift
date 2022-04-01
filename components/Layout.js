import Navigation from "./Navigation";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
