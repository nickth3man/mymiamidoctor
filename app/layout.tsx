import type { Metadata } from "next";
import { montserrat, sourceSansPro } from "./fonts";
import "./globals.css";
import { Header, Footer } from '@/components';

export const metadata: Metadata = {
  title: "Dr. Marina Gafanovich | Miami Primary Care Physician",
  description: "Dr. Marina Gafanovich provides personalized primary care and telehealth services in Miami. Schedule an appointment today.",
  keywords: "Miami doctor, primary care Miami, telehealth Miami, Dr. Marina Gafanovich, Russian speaking doctor Miami",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSansPro.variable}`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
