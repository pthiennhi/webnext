/* eslint-disable react-hooks/rules-of-hooks */
import { Div, Text } from "@/components";
import { TECH_STACK } from "@/constants/techStack";
import { Avatar } from "@nextui-org/react";
import { useId } from "react";

export default function AboutPage() {
  return (
    <Div className="container mx-auto">
      <Div className="my-10 flex w-full flex-col flex-wrap items-center justify-start gap-10">
        <Text className="max-w-3xl text-center text-2xl font-bold tracking-tight text-gray-900 drop-shadow-xl duration-200 dark:text-gray-100 lg:text-3xl xl:text-4xl">
          About us
        </Text>
        <Div className="shadow-card flex w-full flex-wrap items-center justify-center gap-10 rounded-xl bg-white px-10 dark:bg-zinc-800 md:flex-row md:justify-start md:gap-20">
          <Div className="aspect-square h-80 w-80">
            <Avatar
              src="/chickies.jpg"
              className="aspect-square h-80 w-80 object-cover"
            />
          </Div>
          <Div className="flex w-full flex-1 flex-col">
            <Text className="mb-4 text-4xl font-semibold text-gray-700 dark:text-gray-200">
              Hey, We&apos;re{" "}
              <span className="whitespace-nowrap text-violet-500">
                Chickies
              </span>
            </Text>
            <Text className="text-base leading-7 text-gray-500 dark:text-gray-400">
              Welcome to The Chickies, where innovation meets development! We
              are a vibrant group of young developers with a passion for
              creating a wide range of applications, including web apps, mobile
              apps, and platforms. Our mission is to build cutting-edge
              solutions that empower and inspire.
            </Text>
            <Text className="mb-5 mt-10 text-base leading-7 text-gray-500 dark:text-gray-400">
              At The Chickies, we take pride in our diverse and talented team of
              developers. With a creative and collaborative approach, we aim to
              turn ideas into reality and make a positive impact on the tech
              world. Our members come from various backgrounds, bringing a rich
              mix of experiences and expertise to the table.
            </Text>
          </Div>
        </Div>
        <Div className="shadow-card flex w-full flex-col items-center gap-10 rounded-xl bg-white px-20 py-10 dark:bg-zinc-800 lg:gap-20">
          <Div className="flex gap-2 text-center text-4xl font-semibold text-gray-700 dark:text-gray-200">
            Our
            <Text className="whitespace-nowrap text-violet-500">
              Tech Stack
            </Text>
          </Div>
          <Div className="mb-5 flex w-full max-w-max flex-col items-start gap-10">
            {TECH_STACK.map((stack) => (
              <Div
                key={useId()}
                className="flex w-full flex-col items-center justify-start gap-2 lg:flex-row lg:items-start"
              >
                <Text className="w-fit py-2 text-center text-2xl font-semibold text-gray-700 dark:text-gray-200 lg:w-60 lg:text-left">
                  {stack.title}
                </Text>
                <Div className="flex flex-row flex-wrap items-center justify-center gap-5 lg:justify-start">
                  {stack.items.map((item) => (
                    <Div
                      key={useId()}
                      className="flex h-full w-32 flex-col items-center justify-between gap-2"
                    >
                      {item.logo}
                      <Text className="text-sm text-gray-500 dark:text-gray-400">
                        {item.name}
                      </Text>
                    </Div>
                  ))}
                </Div>
              </Div>
            ))}
          </Div>
        </Div>
      </Div>
    </Div>
  );
}
