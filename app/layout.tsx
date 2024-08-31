import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hybrids_2.1",
  icons: "/assets/disc-02.svg",
  description: "Youtube and Video Downloader, ShortUrl Make",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/assets/disc-02.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
