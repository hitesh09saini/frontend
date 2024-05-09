import { Protest_Strike } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";
const roboto = Protest_Strike({
  subsets: ["latin"],
  weight: ['400']
});

export const metadata = {
  title: "Hitesh Folio",
  description: "Hello, I'm Hitesh Saini, currently residing in Mahwa, Dausa, Rajasthan. After successfully completing my studies at Arya College, Kukas, Jaipur, where I obtained a B.Tech degree in Electrical Engineering, I've dedicated myself to the field of full-stack development at DEVHUB Tech. Alongside my professional endeavors, I actively immerse myself in freelancing projects during my leisure hours, continuously expanding my skill set and contributing to diverse projects.",
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
      <head>
       <meta name="google-site-verification" content="AVm77pUwDQF3j9FwjMzA5-0XVQgb4C13O-z-MafYSS0" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FQGQ0V2SD7"></Script>
        <Script id="google-analytics">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-FQGQ0V2SD7')`}
        </Script>
      </head>
      <body suppressHydrationWarning={true} className={`${roboto.className} overflow-x-hidden`} >{children}</body>
    </html>
  );
}
