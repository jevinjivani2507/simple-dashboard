import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/home/sidebar";
import ContactsSection from "@/components/home/contacts-section";
import Navbar from "@/components/home/navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JusPay",
  description: "JusPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="bg-background grid h-screen grid-cols-[auto_1fr_auto]">
            <Sidebar />

            <div className="flex flex-1 flex-col overflow-x-auto">
              <Navbar />
              {children}
            </div>

            <ContactsSection />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
