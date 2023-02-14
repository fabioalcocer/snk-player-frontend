import "./globals.css";
import { Poppins } from "@next/font/google";

import Footer from "./(index)/components/Footer";
import Header from "./(index)/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark">
        <div className={`min-h-screen bg-[#141416] ${poppins.className}`}>
          <Header />
          <div className="mx-auto flex min-h-[96vh] max-w-7xl flex-col rounded-lg px-6 sm:px-8">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
