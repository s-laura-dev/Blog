// app/layout.tsx (or your relevant layout file)
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/NavBar";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Laura Spina Dev",
  description: "Portfolio of Laura Spina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-beige text-electricBlue`}
      >
        <Navbar />
        <main className="flex-grow container mx-auto my-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}