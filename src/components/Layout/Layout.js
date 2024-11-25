// import React from "react";
// import Navbar from "../Layout/Navbar/Navbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//   console.log("Children in Layout:", children);
//   return (
//     <div>
//       <Navbar />
//       <main style={{ minHeight: "70vh" }}>{children}</main>{" "}
//       {/* Correct usage */}
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React from "react";
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "70vh", paddingTop: "130px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
