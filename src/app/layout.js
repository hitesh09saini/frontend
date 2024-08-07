import { Protest_Strike } from "next/font/google";
import Head from 'next/head';

import "./globals.css";
import Script from "next/script";
const roboto = Protest_Strike({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Hitesh Folio",
  description: "Hello, I'm Hitesh Saini, Software Engineer, 21 year old, currently residing in Mahwa, Dausa, Rajasthan. After successfully completing my studies at Arya College, Kukas, Jaipur, where I obtained a B.Tech degree in Electrical Engineering, I've dedicated myself to the field of full-stack development at DEVHUB Tech. Alongside my professional endeavors, I actively immerse myself in freelancing projects during my leisure hours, continuously expanding my skill set and contributing to diverse projects.",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest'
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Hitesh Saini</title>
        <meta name="description" content="Hitesh Saini का पोर्टफोलियो." />
      </Head>
      <body suppressHydrationWarning={true} className={`${roboto.className} overflow-x-hidden`} >{children}</body>
    </html>
  );
}
