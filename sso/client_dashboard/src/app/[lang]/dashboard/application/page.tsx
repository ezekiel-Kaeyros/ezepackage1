import Applications from "@/app/modules/applications/applications";

export default function Dashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <div className="">
      <Applications />
      {/* Use newParam or any other state/props as needed */}
    </div>
  );
}
