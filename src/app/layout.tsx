import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, IBM_Plex_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Bricolage_Grotesque({ 
  subsets: ["latin"], 
  variable: "--font-display" 
});

const body = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-body" 
});

const mono = IBM_Plex_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "500"], 
  variable: "--font-mono" 
});

export const metadata: Metadata = {
  title: "Truering — Inbound & Outbound Telecalling CRM Software",
  description: "Every missed call means money left on the table. Truering's Telecalling CRM Software brings calls, leads, dialers, and customer conversations together in one smart system that lets teams reply quicker, close more deals, and keep growing month after month.",
  openGraph: {
    title: "Truering — Inbound & Outbound Telecalling CRM Software",
    description: "Every missed call means money left on the table. Truering's Telecalling CRM Software brings calls, leads, dialers, and customer conversations together in one smart system.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
