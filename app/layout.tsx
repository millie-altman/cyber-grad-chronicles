import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cybergradchronicles.com"),

  title: {
    default: "Cyber Grad Chronicles",
    template: "%s | Cyber Grad Chronicles",
  },

  description:
    "Cybersecurity research, technical projects, career reflections, IT operations experience, and practical resources documenting an unconventional path into technology and cybersecurity.",

  applicationName: "Cyber Grad Chronicles",

  authors: [
    {
      name: "Millie Altman",
    },
  ],

  creator: "Millie Altman",
  publisher: "Cyber Grad Chronicles",

  keywords: [
    "cybersecurity",
    "cyber threat intelligence",
    "threat intelligence",
    "IT operations",
    "cybersecurity portfolio",
    "cybersecurity research",
    "malware analysis",
    "ransomware research",
    "MITRE ATT&CK",
    "military spouse careers",
    "cybersecurity career",
    "Cyber Grad Chronicles",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "https://cybergradchronicles.com",
    siteName: "Cyber Grad Chronicles",
    title: "Cyber Grad Chronicles",
    description:
      "Cybersecurity research, technical projects, career reflections, IT operations experience, and practical resources documenting an unconventional path into technology and cybersecurity.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyber Grad Chronicles",
    description:
      "Cybersecurity research, technical projects, career reflections, IT operations experience, and practical resources documenting an unconventional path into technology and cybersecurity.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
