import { Surround, Text } from "@/components";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import React, { useId } from "react";

export default function SmartHome() {
  return (
    <Surround className="container mx-auto flex h-screen w-full flex-1 flex-col py-4">
      <Surround className="h-full overflow-x-scroll">
        <Text className="text-center font-serif text-xl font-semibold">
          Smart Home Devices
        </Text>
        {Array.from({ length: 10 }).map((_) => (
          <Card className="py-4" key={useId()}>
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
              <p className="text-tiny font-bold uppercase">Daily Mix</p>
              <small className="text-default-500">12 Tracks</small>
              <h4 className="text-large font-bold">Frontend Radio</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="rounded-xl object-cover"
                src="/images/feature.svg"
                width={270}
                height={200}
              />
            </CardBody>
          </Card>
        ))}
      </Surround>
    </Surround>
  );
}
