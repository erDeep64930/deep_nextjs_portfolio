import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
          <div className="h-24">
            <Navbar />
          </div>
        </div>

        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </body>
    </html>
  );
}
