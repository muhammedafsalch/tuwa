import LocalePage from '../[locale]/page';

export default function HomePage() {
  return <LocalePage params={Promise.resolve({ locale: 'en' })} />;
}
