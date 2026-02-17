import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://electricaltrainerkits.com"),
  title: {
    default: "Lovosis Technology - #1 Manufacturer of Education Trainer Kits in India",
    template: "%s | Lovosis Technology",
  },
  description: "Lovosis Technology is India's leading manufacturer of Education Trainer Kits, Electrical Engineering Lab Equipment, and Industrial Technical Training Systems. We supply high-quality, ISO-certified trainer kits for engineering colleges, polytechnics, and industrial training institutes across India. Explore our wide range of Electrical, Electronics, and Automation lab solutions.",
  keywords: [
    "Education Trainer Kits",
    "Electrical Trainer Kits",
    "Industrial Technical Kits",
    "Engineering Lab Equipment",
    "Technical Education Solutions",
    "Electrical Machines Trainer",
    "Power Electronics Lab",
    "Control Systems Trainer",
    "Microcontroller Kits",
    "IoT Trainer Kits",
    "Robotics Training Kits",
    "PCB Design Services",
    "Electronic Manufacturing Services",
    "Educational Equipment Manufacturer India",
    "Lovosis Technology Private Limited",
    "Lovosis India",
    "Bangalore",
    "Kerala"
  ],
  authors: [{ name: "Lovosis Technology Private Limited", url: "https://lovosis.in" }],
  creator: "Lovosis Technology",
  publisher: "Lovosis Technology Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://lovosis.in",
    title: "Lovosis Technology - Premier Education & Industrial Trainer Kits Manufacturer",
    description: "Discover trusted Education Trainer Kits and Industrial Technical Equipment from Lovosis Technology. Empowering engineering education across India with premium quality, hands-on learning solutions.",
    siteName: "Lovosis Technology",
    images: [
      {
        url: "/logo.png", // Ensure this path is correct for OG image or update to a better banner image if available
        width: 1200,
        height: 630,
        alt: "Lovosis Technology Private Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lovosis Technology - Education Trainer Kits India",
    description: "Leading manufacturer of Electrical and Engineering Trainer Kits in India.",
    images: ["/logo.png"], 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/LOGO ICON.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
