//-------------------------------------DEPENDENCIES
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
//-------------------------------------COMPONENTS
//--------------------------------------STYLES
import "react-toastify/dist/ReactToastify.css";
import "@mantine/core/styles.css";
import "./globals.css";
import { AppBar, HeroBullets } from "./components/Index";

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
          <HeroBullets />
          <ToastContainer />
        </MantineProvider>
      </body>
    </html>
  );
}
