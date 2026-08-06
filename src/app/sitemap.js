export const dynamic = 'force-static';
export default function sitemap() {
  const baseUrl = 'https://tuwabusiness.com';

  const services = [
    "business-setup",
    "pro-services",
    "legal-translation",
    "document-attestation",
    "debt-recovery",
    "immigration-services"
  ];

  const blogs = [
    "start-a-company-in-qatar",
    "business-licensing-guide",
    "importance-of-certified-translation",
    "document-attestation-process",
    "debt-recovery-solutions",
    "moph-watheq-registration"
  ];

  const staticRoutes = [
    '',
    '/about-us',
    '/services',
    '/contact',
    '/request-quote',
    '/careers',
    '/blog',
    '/our-process',
    '/industries-we-serve',
    '/core-advantage',
    '/privacy',
    '/terms'
  ];

  const sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...sitemap, ...serviceRoutes, ...blogRoutes];
}
