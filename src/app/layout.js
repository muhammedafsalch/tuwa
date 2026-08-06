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
  "name": "TUWA Business Services Qatar",
  "url": "https://tuwabusiness.com",
  "logo": "https://tuwabusiness.com/tuwa%20logo%20png-01.png",
  "description": "Leading corporate service provider in Qatar. Specialists in Company Formation Qatar, Debt Clearance, Translation Services, and PRO Services Doha.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Matar Qadeem Street",
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
  metadataBase: new URL('https://tuwabusiness.com'),
  title: "Company Formation Qatar | Debt Clearance & PRO Services | TUWA",
  description: "Accelerate your business with TUWA Qatar. #1 experts in Company Formation Qatar, Debt clearance, Legal Translation services, PRO services, Hukoomi services, and Certificate Attestation. Trusted corporate partners in Doha.",
  keywords: "Company formation qatar, Translation services qatar, Debt clearance qatar, Pro services qatar, Hukoomi services qatar, Certificate Attestation Qatar, Business setup Doha, Qatar company registration, PRO services Doha, Legal translation Doha",
  openGraph: {
    title: "TUWA Qatar | Company Formation & PRO Partners",
    description: "The premier partner for debt clearance, company formation, and legal translation in Qatar. Empowering international enterprises with elite corporate solutions.",
    url: "https://tuwabusiness.com",
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
    canonical: "https://tuwabusiness.com",
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
  facebook: {
    appId: '', // Add if available
  }
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-white text-gray-900 w-full`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <SpeedInsights />
        <main className="bg-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}

