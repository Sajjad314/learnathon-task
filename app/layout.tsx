import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/Components/SidenavBar";
import TopNav from "@/Components/TopNav";

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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen max-h-screen bg-[#F7F7FB]">
          <Sidebar />
          <div className="flex-1">
            <TopNav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
