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
  metadataBase: new URL("https://lumenarte.nl"),
  title: "Lichtsculpturen & Pasteltekeningen – LumenArte",
  description:
  "Unieke, duurzame lichtsculpturen en pasteltekeningen. Handgemaakt met liefde. Bekijk de collectie en ontdek lichtkunst voor alle seizoenen.",
  keywords: [
  "lichtsculpturen",
  "pasteltekeningen",
  "kunst",
  "lichtkunst",
  "duurzame kunst",
  "handgemaakte kunst",
  "kerstbomen",
  "LumenArte",
  ],
  icons: {
    icon: "/favicon.ico", // standaard favicon
    shortcut: "/favicon.ico", // voor snelkoppelingen
    apple: "/apple-touch-icon.png", // voor iOS
  },
  openGraph: {
    title: "LumenArte",
    description: "Lichtsculpturen en pasteltekeningen",
    url: "https://lumenarte.nl",
    siteName: "LumenArte",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LumenArte logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "LumenArte",
    description: "Duurzame lichtsculpturen en pasteltekeningen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${nunitoSans.variable} ${marhey.variable} antialiased`}>
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
