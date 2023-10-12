import Footer from "./Footer";
import Hero from "./Hero";

// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  return (
    <>
      <Hero />
      <div className="content-container">
        <div className="content">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
