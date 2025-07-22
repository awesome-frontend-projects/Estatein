import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const uranist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Estatein | Find Your Dream Property – Buy, Sell & Rent Real Estate",
  description:
    "Explore premium properties with Estatein – your trusted platform for buying, selling, and renting homes, apartments, and commercial real estate. Discover listings tailored to your lifestyle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={uranist.className}>
      <body className="dark">
        <NextTopLoader showSpinner={false} color="#9810fa" />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
