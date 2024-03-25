import React from "react";
import { Div, Text } from "@/components/common/ui";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: React.ReactNode;
};
export const Section = (props: ISectionProps) => {
  return (
    <Div
      className={`mx-auto max-w-screen-lg px-3 ${
        props.yPadding ? props.yPadding : "py-16"
      }`}
    >
      {(props.title || props.description) && (
        <Div className="mb-12 text-center">
          {props.title && (
            <Text className="text-4xl font-bold text-gray-900">{props.title}</Text>
          )}
          {props.description && (
            <Div className="mt-4 text-xl md:px-20">{props.description}</Div>
          )}
        </Div>
      )}

      {props.children}
    </Div>
  );
};
