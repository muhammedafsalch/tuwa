import "./globals.css";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

// Optimize Poppins loading by specifying only Latin subset and required weights
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap", // Best for fast loading
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tuwa Business Solutions",
  "url": "https://tuwabusiness.com",
  "logo": "https://tuwabusiness.com/tuwa-logo.png",
  "description": "Your Trusted Partner for Business Setup, PRO Services & Corporate Solutions in Qatar. Specialists in Company Formation, Debt Clearance, Translation Services, and more.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Matar Qadeem Street",
    "addressLocality": "Doha",
    "addressCountry": "QA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+974 7732 3214",
    "email": "info@tuwabusiness.com",
    "contactType": "customer service"
  }
};

export const metadata = {
  metadataBase: new URL('https://tuwabusiness.com'),
  title: {
    template: "%s | Tuwa Business Solutions",
    default: "Tuwa Business Solutions | Business Setup & PRO Services in Qatar",
  },
  description: "Your Trusted Partner for Business Setup, PRO Services & Corporate Solutions in Qatar. Specialists in Company Formation, Debt Clearance, Translation Services, and more.",
  keywords: "Business Setup Qatar, Company Formation Qatar, PRO Services Qatar, Legal Translation Qatar, Document Attestation Qatar, Trade License Qatar, Business Licensing Doha, Hukoomi Portal Support",
  openGraph: {
    title: "Tuwa Business Solutions | Corporate Services Qatar",
    description: "Empowering businesses in Qatar with elite corporate solutions. From setup to PRO services.",
    url: "https://tuwabusiness.com",
    siteName: "Tuwa Business Solutions",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tuwa Business Solutions Landing Page',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuwa Business Solutions | Premium Business Consulting",
    description: "Expert Company Formation and PRO Services in Doha. Start your business in Qatar today.",
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: "https://tuwabusiness.com",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-poppins antialiased bg-[#070B17] text-white w-full relative min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SpeedInsights />
        
        {/* Global ambient background glow */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="gradient-blob bg-primary-600/20 w-[600px] h-[600px] top-[-100px] left-[-200px]" />
          <div className="gradient-blob bg-accent-500/10 w-[800px] h-[800px] bottom-[-200px] right-[-200px] animation-delay-2000" />
        </div>

        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppWidget />
        <Footer />
      </body>
    </html>
  );
}
