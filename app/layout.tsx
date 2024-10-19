// app/layout.tsx (or your relevant layout file)
import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Footer from "@/components/Footer";
import CustomLink from "@/components/Link";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-800`}
      >
        <nav className="bg-white shadow-md p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <a href="/">Laura Spina Dev</a>
            </h1>
            <div>
              <CustomLink href="/" className="mx-4 text-blue-600 hover:underline">
                Home
              </CustomLink>
              <CustomLink href="/blog" className="mx-4 text-blue-600 hover:underline">
                Blog
              </CustomLink>
            </div>
          </div>
        </nav>
        <main className="flex-grow container mx-auto my-8 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}