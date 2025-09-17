import type { Metadata } from "next";
import { Provider } from "./provider";
import "./styles/globals.css";
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
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${marhey.variable} antialiased`}>
        <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
