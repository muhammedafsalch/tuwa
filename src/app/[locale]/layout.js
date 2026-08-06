import "../globals.css";
import { Poppins, Anek_Malayalam, Tajawal } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";

// Optimize fonts by specifying subsets and weights
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const anek = Anek_Malayalam({
  variable: "--font-anek",
  subsets: ["malayalam"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tuwa Business Solutions",
  "url": "https://tuwabusiness.com",
  "logo": "https://tuwabusiness.com/new%20tuwa%20logo.png",
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

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  let title = "Tuwa Business Solutions | Business Setup & PRO Services in Qatar";
  let description = "Your Trusted Partner for Business Setup, PRO Services & Corporate Solutions in Qatar. Specialists in Company Formation, Debt Clearance, Translation Services, and more.";
  
  if (locale === 'ar') {
    title = "حلول طوى للأعمال | تأسيس الشركات وخدمات المندوب في قطر";
    description = "شريكك الموثوق لتأسيس الأعمال وخدمات المندوب وحلول الشركات في قطر. متخصصون في تأسيس الشركات وتخليص الديون وخدمات الترجمة والمزيد.";
  } else if (locale === 'ml') {
    title = "തുവ ബിസിനസ് സൊല്യൂഷൻസ് | ഖത്തറിലെ ബിസിനസ്സ് സജ്ജീകരണവും PRO സേവനങ്ങളും";
    description = "ഖത്തറിലെ ബിസിനസ്സ് സജ്ജീകരണം, PRO സേവനങ്ങൾ, കോർപ്പറേറ്റ് സൊല്യൂഷനുകൾ എന്നിവയ്ക്കുള്ള നിങ്ങളുടെ വിശ്വസ്ത പങ്കാളി. കമ്പനി രൂപീകരണം, കടം തീർക്കൽ, വിവർത്തന സേവനങ്ങൾ എന്നിവയിലും മറ്റും വിദഗ്ധർ.";
  }

  return {
    metadataBase: new URL('https://tuwabusiness.com'),
    title: {
      template: "%s | Tuwa Business Solutions",
      default: title,
    },
    description: description,
    keywords: "Business Setup Qatar, Company Formation Qatar, PRO Services Qatar, Legal Translation Qatar, Document Attestation Qatar, Trade License Qatar, Business Licensing Doha, Hukoomi Portal Support",
    openGraph: {
      title: title,
      description: description,
      url: `https://tuwabusiness.com/${locale}`,
      siteName: "Tuwa Business Solutions",
      locale: locale === 'ar' ? 'ar_QA' : locale === 'ml' ? 'ml_IN' : 'en_US',
      type: "website",
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Tuwa Business Solutions',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://tuwabusiness.com/${locale}`,
      languages: {
        'en': 'https://tuwabusiness.com/en',
        'ar': 'https://tuwabusiness.com/ar',
        'ml': 'https://tuwabusiness.com/ml',
        'x-default': 'https://tuwabusiness.com/en',
      },
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}
import { getDictionary } from "@/i18n/getDictionary";

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ml' }];
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const dict = await getDictionary(locale);

  const fontClass = locale === 'ar' ? `${tajawal.variable} font-tajawal` : locale === 'ml' ? `${anek.variable} font-anek` : `${poppins.variable} font-poppins`;

  return (
    <html lang={locale} dir={dir} className="scroll-smooth">
      <body className={`${fontClass} antialiased bg-[#070B17] text-white w-full relative min-h-screen flex flex-col`}>
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

        <Navbar dict={dict.navbar} locale={locale} />
        <main className="flex-grow">
          {children}
        </main>
        <WhatsAppWidget />
        <Footer dict={dict.footer} locale={locale} />
      </body>
    </html>
  );
}
