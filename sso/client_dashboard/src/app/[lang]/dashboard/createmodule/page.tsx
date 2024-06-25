import CreateModuleForm from "@/app/common/components/createModuleForm/createModuleForm";

export default async function dashboard({
  params: { lang },
}: {
  params: { lang: string };
}) {
  //   const { page, navigation } = await getDictionary(lang);

  return (
    <div className="h-full">
      <CreateModuleForm />
    </div>
  );
}
