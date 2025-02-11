import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getLatestEventLink } from "@/lib/event-utils";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Developer MultiGroup",
  description:
    "Official event page of Developer MultiGroup where you can discover and attend insightful events every month! ",
    robots: {
      index: true,
      follow: true
    },
    keywords: ['Developer', 'MultiGroup', 'Developer MultiGroup', 'DMG', 'Etkinlik', 'Yazılım', 'Yazılım Etkinliği', 'Topluluk', 'Yazılım Topluluğu'],
    // metadataBase: new URL("https://furkanunsalan.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const latestEventLink = getLatestEventLink();
  return (
    <html lang="en">
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="13873dc5-f94b-4d7f-9399-781076df22f6"
        ></Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar eventLink={latestEventLink} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
