import type { Metadata } from "next";
import { Copse } from "next/font/google";
import "./globals.css";
import Navigation from "./components/navigation/navigation";

const copse = Copse({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthew Collins Furniture",
  description: "Cabinet makers to the trade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={copse.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
