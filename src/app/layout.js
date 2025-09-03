import { Protest_Strike } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
import ServiceWorkerRegister from "./ServiceWorkerRegister";

const roboto = Protest_Strike({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Hitesh Folio",
  description: "Portfolio of Hitesh Saini",
  manifest: "/site.webmanifest",   
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Hitesh Saini</title>
        <meta name="description" content="Hitesh Saini का पोर्टफोलियो." />
      </Head>
      <body suppressHydrationWarning={true} className={`${roboto.className} overflow-x-hidden`}>
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
