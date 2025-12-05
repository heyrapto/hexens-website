import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hexens - Web3 Cybersecurity",
  description: "Premier cybersecurity solution provider specializing in emerging technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
