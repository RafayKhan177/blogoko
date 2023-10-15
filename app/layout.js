//-------------------------------------DEPENDENCIES
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ToastContainer } from "react-toastify";
//--------------------------------------STYLES
import "react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";
import "./globals.css";
//-------------------------------------COMPONENTS
import { AppBar } from "./components/appBar/AppBar";
import Footer from "./components/footer/FooterSocial";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppBar />
          {children}
          <Footer />
          <ToastContainer />
        </MantineProvider>
      </body>
    </html>
  );
}
