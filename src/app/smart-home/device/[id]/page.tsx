import { Div, Text } from "@/components";

export default function Device({ params }: { params: { id: string } }) {
  return (
    <Div className="container mx-auto flex h-screen w-full flex-1 flex-col py-4">
      <Div className="flex h-full flex-col gap-8 overflow-x-scroll rounded-xl bg-white p-4">
        <Text className="text-center font-serif text-xl font-semibold">
          Dashboard {params.id}
        </Text>
        <Div className="flex-1">haha</Div>
      </Div>
    </Div>
  );
}
