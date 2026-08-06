import LocaleLayout, { generateMetadata as localeGenerateMetadata } from '../[locale]/layout';

export const generateMetadata = async () => {
  return localeGenerateMetadata({ params: Promise.resolve({ locale: 'en' }) });
};

export default function HomeLayout({ children }) {
  return <LocaleLayout params={Promise.resolve({ locale: 'en' })}>{children}</LocaleLayout>;
}
