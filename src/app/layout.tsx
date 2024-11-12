import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/footer";
import { GetSessionProvider } from "@/components/sessionProvider";
import { Navbar } from "@/components/navbar";
import "@/assets/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osmantunahan.com.tr"),
  title: "Osman Tunahan ARIKAN",
  description:
    "Hey, my name is Osman Tunahan ARIKAN. I am a Cyber Security Expert and Full Stack Developer. I was born and raised in Turkey.",
  openGraph: {
    title: "Osman Tunahan ARIKAN",
    description:
      "Hey, my name is Osman Tunahan ARIKAN. I am a Cyber Security Expert and Full Stack Developer. I was born and raised in Turkey.",
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
  keywords: [
    "Osman Tunahan ARIKAN",
    "Osman Tunahan",
    "ARIKAN",
    "Osman ARIKAN",
    "Osman",
    "Tunahan",
    "Cyber Security",
    "Expert",
    "Full Stack",
    "Developer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GetSessionProvider>
      <html lang="en">
        <body className={`${GeistSans.className} bg-background text-zinc-100`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </GetSessionProvider>
  );
}
