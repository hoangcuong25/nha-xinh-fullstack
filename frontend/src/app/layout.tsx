import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Footer";
import Support from "@/components/Support";
import AppContextProvider from "@/context/AppContext";
import { ToastContainer } from 'react-toastify';

const open_sans = Open_Sans({
  weight: ['500'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={open_sans.className}
      >
        <div className='max-w-screen-2xl'>
          <AppContextProvider>
            {children}
          </AppContextProvider>
          <Footer />
          <Support />
          <ToastContainer />
        </div>
      </body>
    </html>
  );
}

