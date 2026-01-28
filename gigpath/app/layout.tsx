import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GigPath - Career Navigation for Gig Workers in India",
  description: "Build skills that unlock better roles — not longer working hours. A career mobility platform helping gig and informal workers move from survival gigs to higher-value roles.",
  keywords: "gig workers, career navigation, skill development, India, delivery riders, warehouse workers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
