import { Div, Text } from "@/components";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";

export default function SmartHome() {
  return (
    <Div className="container mx-auto flex h-screen w-full flex-1 flex-col py-4">
      <Div className="flex h-full flex-col gap-8 overflow-x-scroll rounded-xl bg-white p-4">
        <Text className="text-center font-serif text-xl font-semibold">
          Smart Home Devices
        </Text>
        <Div className="flex-1">
          <Div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <Card
                className="py-4"
                key={useId()}
                as={Link}
                href={`/smart-home/device/${i+1}`}
              >
                <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                  <Text className="text-tiny font-bold uppercase">
                    Daily Mix
                  </Text>
                  <Text className="text-default-500">12 Tracks</Text>
                  <Text className="text-large font-bold">Frontend Radio</Text>
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
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
