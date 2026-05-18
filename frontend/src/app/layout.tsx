import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mujahid Motors — Premium Vehicles, Lagos Nigeria",
  description:
    "Mujahid Motors is Nigeria's trusted dealership for new and certified pre-owned vehicles. Explore our curated fleet of premium cars in Lagos.",
  keywords: ["car dealership", "Nigeria", "Lagos", "buy car", "Mujahid Motors"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
