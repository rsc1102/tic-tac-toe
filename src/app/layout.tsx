import type { Metadata } from "next";
import "./globals.css";
import {geistSans, geistMono} from '@/app/UI/fonts';

export const metadata: Metadata = {
  title: "Tic-Tac-Toe App",
  description: "Tic-Tac-Toe by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
