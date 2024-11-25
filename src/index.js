import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./contexts/authContext";
// import { ClerkProvider } from "@clerk/clerk-react";
// const PUBLISHABLE_KEY = import.meta.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

// console.log(PUBLISHABLE_KEY);
// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
    <AuthProvider>
      <App />
    </AuthProvider>

    {/* </ClerkProvider> */}
  </React.StrictMode>
);
