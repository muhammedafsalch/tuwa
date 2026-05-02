import "./globals.css";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "TUWA Translation and Services",
  "url": "https://www.tuwatranslations.com",
  "logo": "https://www.tuwatranslations.com/tuwa%20logo%20png-01.png",
  "description": "Premium Business Consulting in Qatar. Expert company formation, legal translation, PRO services, and debt clearance.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Matar Qadeem",
    "addressLocality": "Doha",
    "addressCountry": "QA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+974 7732 3214",
    "email": "tuwatranslations@gmail.com",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/share/18jKzVfiWK/?mibextid=wwXIfr",
    "https://www.instagram.com/tuwa.translations?igsh=ajBjc2Y3NTkyNWNy&utm_source=qr"
  ]
};

export const metadata = {
  metadataBase: new URL('https://www.tuwatranslations.com'),
  title: "TUWA Qatar | #1 Company Formation, PRO Services & Legal Translation Doha",
  description: "Accelerate your business in Qatar with TUWA. Expert Company Formation Qatar, Legal Translation services Qatar, Debt clearance, PRO services, Hukoomi services, and Certificate Attestation Qatar. Trusted by 500+ global enterprises.",
  keywords: "Company formation qatar, Translation services qatar, Debt clearance qatar, Pro services qatar, Hukoomi services qatar, Certificate Attestation Qatar, Business setup Doha, Qatar company registration, PRO services Doha, Legal translation Doha",
  openGraph: {
    title: "TUWA Qatar | Premium Business Consulting & PRO Services",
    description: "The premier partner for company formation and legal translation in Qatar. Empowering international enterprises with elite corporate solutions.",
    url: "https://www.tuwatranslations.com",
    siteName: "TUWA Business Services",
    images: [
      {
        url: "/images/qatar.jpeg",
        width: 1200,
        height: 630,
        alt: "TUWA Qatar Business Excellence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TUWA Qatar | Premium Business Consulting",
    description: "Expert Company Formation and PRO Services in Doha. Start your business in Qatar today.",
    images: ["/images/qatar.jpeg"],
  },
  alternates: {
    canonical: "https://www.tuwatranslations.com",
  },
  facebook: {
    appId: '', // Add if available
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-gray-900 w-full`}>
        <SpeedInsights />
        <main className="bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}

