import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import "@/assets/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osmantunahan.com.tr"),
  title: "Osman Tunahan ARIKAN",
  description: "Cyber Security Expert & Full Stack Developer",
  openGraph: {
    title: "Osman Tunahan ARIKAN",
    description: "Cyber Security Expert & Full Stack Developer",
    url: "https://osmantunahan.com.tr",
    siteName: "Osman Tunahan ARIKAN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Osman Tunahan ARIKAN",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-background text-zinc-100`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
