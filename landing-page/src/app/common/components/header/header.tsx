import NavBar from './navbar/NavBar';

export default async function Header({ lang }: { lang: string }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <header className="relative">
      <NavBar lang={lang} />
    </header>
  );
}
