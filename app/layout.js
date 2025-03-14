import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Footer } from "@/components/my-footer";

import { Kantumruy_Pro } from "next/font/google";

const kantumruyPro = Kantumruy_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["khmer"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${kantumruyPro.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="min-h-screen">
        {children}
        </div>
         {/* Footer */}
      <Footer/>
      {/*End Footer */}
      </body>
    </html>
  );
}
