import React from "react";
import { Surround, Text } from "@/components/common/ui";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: React.ReactNode;
};
export const Section = (props: ISectionProps) => {
  return (
    <Surround
      className={`mx-auto max-w-screen-lg px-3 ${
        props.yPadding ? props.yPadding : "py-16"
      }`}
    >
      {(props.title || props.description) && (
        <Surround className="mb-12 text-center">
          {props.title && (
            <Text className="text-4xl font-bold text-gray-900">{props.title}</Text>
          )}
          {props.description && (
            <Surround className="mt-4 text-xl md:px-20">{props.description}</Surround>
          )}
        </Surround>
      )}

      {props.children}
    </Surround>
  );
};
