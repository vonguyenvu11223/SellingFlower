import { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./globals.css";
import ClerkContext from "../../components/ClekContext/CleakContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkContext>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <div className="content">{children}</div>
          <Footer />
        </body>
      </html>
    </ClerkContext>
  );
}
