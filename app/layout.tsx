import type { Metadata } from "next";
import { Provider } from "./provider";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

// lettertypen
import { nunitoSans } from "./fonts/nunitoSans";
import { Marhey } from "next/font/google";

const marhey = Marhey({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  variable: '--font-marhey', 
})

export const metadata: Metadata = {
  title: "Lichtsculpturen",
  description: "Kunst door Jacqueline Tiemens",
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
        </Provider>
      </body>
    </html>
  );
}
