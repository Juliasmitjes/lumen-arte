import type { Metadata } from "next";
import { Provider } from "./provider";
import "./styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

// lettertypen
import { nunitoSans } from "./fonts/nunitoSans";
import { Marhey } from "next/font/google";
import { ToastContainer } from "react-toastify";

const marhey = Marhey({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-marhey', 
})

export const metadata: Metadata = {
  title: "LumenArte",
  description: "Handgemaakte lichtsculpturen",
  icons: {
    icon: "/favicon.ico", // standaard favicon
    shortcut: "/favicon.ico", // voor snelkoppelingen
    apple: "/apple-touch-icon.png", // voor iOS
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunitoSans.variable} ${marhey.variable} antialiased`}>
      <body>
        <Provider>
          <Header />
          <main >{children}</main>
          <Footer />
          <ToastContainer 
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
          />
        </Provider>
      </body>
    </html>
  );
}
