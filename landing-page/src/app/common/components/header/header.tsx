import { getDictionary } from '../../../../../lib/dictionary';
import NavBar from './navbar/NavBar';

export default async function Header({ lang, navigation }: { lang: string, navigation:any }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <header className="relative">
      <NavBar lang={lang} navigation={navigation}/>
    </header>
  );
}
