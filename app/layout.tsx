import type { Metadata } from "next";
import { Copse } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Link from "next/link";

const copse = Copse({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Collins Furniture",
  description: "Cabinet makers to the trade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={copse.className}>
        <Navigation />
        <nav>
        <Link href="/login">Open modal</Link>
      </nav>
        {children}
        <Footer/>
      </body>
    </html>
  );
}


