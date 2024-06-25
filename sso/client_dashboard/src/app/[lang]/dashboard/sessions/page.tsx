// import { Locale } from "@/i18n.config";
// import { getDictionary } from "@/lib/dictionary";
// import Home from "../common/components/home/Home";

export default async function dashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  //   const { page, navigation } = await getDictionary(lang);

  return (
    <div className="">
      <p>This is my sessions page</p>
    </div>
  );
}
