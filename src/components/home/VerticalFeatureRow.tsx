"use client";

import { Surround, Text } from "@/components/common/ui";
import { cn } from "@/libs/utils";
import Image from "next/image";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  return (
    <Surround
      className={cn("mt-20 flex flex-wrap items-center", {
        "flex-row-reverse": props.reverse,
      })}
    >
      <Surround className="w-full text-center sm:w-1/2 sm:px-6">
        <Text className="text-3xl font-semibold text-gray-900">
          {props.title}
        </Text>
        <Surround className="mt-6 text-xl leading-9">
          {props.description}
        </Surround>
      </Surround>

      <Surround className="w-full p-6 sm:w-1/2">
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={400}
          height={400}
        />
      </Surround>
    </Surround>
  );
};
