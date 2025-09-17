import type { Metadata } from "next";
import { Provider } from "./provider";
import "./styles/globals.css";

import { nunitoSans } from "./fonts/nunitoSans";


import { Geist, Geist_Mono } from "next/font/google";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




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
        className={`${nunitoSans.variable} ${geistMono.variable} antialiased`}>
        <Provider>
        {children}
      </Provider>
      </body>
    </html>
  );
}
