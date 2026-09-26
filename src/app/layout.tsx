import { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Digital Chautari | Creative Technology",
  description: "Digita marketing, content creation, and health-tech software in Kathmandu.",
};

export default function RootLayout({children}: Readonly<
  {children: React.ReactNode;}>) {
    return (
      <html lang="en">
        <body className={`${inter.variable} ${sora.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    );
  }