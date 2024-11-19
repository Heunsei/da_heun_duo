export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{`${id}로 관리되는 채널페이지입니다.`}</div>;
}
