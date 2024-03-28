import React from "react";
import { Background, Section, Div, Text } from "@/components/common/ui";
import { Button, Link } from "@nextui-org/react";
import { SendIcon } from "@/components/common/icons/curved";

export const Hero = () => {
  return (
    <Background color="bg-primary/5">
      <Section yPadding="pt-20 pb-32">
        <Div className="text-center">
          <Div className="leading-hero whitespace-pre-line text-5xl font-bold text-gray-900">
            <Text>Chickies Company</Text>
            <Text className="mt-4 text-primary-500">
              Smart IOT solutions for your home
            </Text>
          </Div>
          <Text className="mt-4 text-2xl">
            Make your home smarter. Control your devices from anywhere. Easy to
            use.
          </Text>
          <Div className="mb-16 mt-4 text-base">
            Check the{" "}
            <Link href="#" className="hover:underline">github repository</Link> or download your {" "}
            <Link href="#" className="hover:underline">Free Guide</Link> for more information.
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
