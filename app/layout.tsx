import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "./components/ui/sonner";
import TopHeader from "./components/layout/TopHeader";
import ReviewsSection from "./components/review-section";
import CommitmentSection from "./components/commitment-section";
import FAQSection from "./components/faqs";
import Newsletter from "./components/newsletter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mabji India",
  description:
    "Discover amazing products with fast shipping and excellent customer service.",
  keywords: "ecommerce, shopping, online store, clothing",
  authors: [{ name: "Mabji India Team" }],
  openGraph: {
    title: "Mabji India - Premium E-commerce Platform",
    description:
      "Discover amazing products with fast shipping and excellent customer service.",
    type: "website",
    siteName: "Mabji India",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mabji India - Premium E-commerce Platform",
    description:
      "Discover amazing products with fast shipping and excellent customer service.",
  },
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
        <AuthProvider>
          <CartProvider>
            <div className="min-h-screen flex flex-col">
              <TopHeader />
              <Header />
              <main className="flex-1">{children}</main>
              <ReviewsSection />
              <CommitmentSection />
              <FAQSection />
              <Newsletter />
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
