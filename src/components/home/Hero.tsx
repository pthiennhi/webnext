import React from "react";
import { Background, Section, Div, Text } from "@/components/common/ui";
import { Button, Link } from "@nextui-org/react";
import { SendIcon } from "@/components/common/icons/curved";

export const Hero = () => {
  return (
    <Background color="bg-primary/5">
      <Section yPadding="pt-20 pb-32">
        <Div className="text-center">
          <Text className="leading-hero whitespace-pre-line text-5xl font-bold text-gray-900">
            {"The modern landing page for\n"}
            <span className="text-primary-500">React developers</span>
          </Text>
          <Div className="mb-16 mt-4 text-2xl">
            The easiest way to build a React landing page in seconds.
          </Div>

          <Link href="/smart-home" color="foreground">
            <Button
              color="primary"
              variant="shadow"
              size="lg"
              endContent={<SendIcon className="text-white" />}
            >
              Go to smart home
            </Button>
          </Link>
        </Div>
      </Section>
    </Background>
  );
};
