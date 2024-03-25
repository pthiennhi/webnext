import { Background, Section, Surround, Text } from "@/components/common/ui";
import { MENU_HEADER } from "@/constants/menuHeader";
import Image from "next/image";
import Link from "next/link";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoReddit, IoLogoTiktok } from "..";

export const Footer = () => (
  <Background color="bg-primary/5">
    <Section>
      <Surround className="text-center">
        <Link href="/" className="flex justify-center">
          <Image
            src="/next.svg"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            priority
            quality={100}
          />
        </Link>
        <Surround className="mt-5 flex flex-row justify-center gap-4">
          {MENU_HEADER.map((item) => (
            <Link
              key={`${item.label}`}
              href={item.href}
              className="flex flex-row items-center justify-center gap-2"
            >
              <Text>{item.label}</Text>
            </Link>
          ))}
        </Surround>
        <Surround className="mt-8 flex justify-center">
          <Surround className="flex flex-wrap gap-2">
            <Link href="/">
              <IoLogoFacebook size="24" className="text-default-400"/>
            </Link>
            <Link href="/">
              <IoLogoLinkedin size="24" className="text-default-400"/>
            </Link>
            <Link href="/">
              <IoLogoReddit size="24" className="text-default-400" />
            </Link>
            <Link href="/">
              <IoLogoTiktok size="24" className="text-default-400"/>
            </Link>
          </Surround>
        </Surround>
        <Surround className="mt-8 text-sm">
          <Text>&copy; 2024 Your Company. All rights reserved.</Text>
        </Surround>
      </Surround>
    </Section>
  </Background>
);
