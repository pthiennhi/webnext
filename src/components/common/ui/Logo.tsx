import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Text } from "@/components/common/ui";

export const Logo = () => {
  return (
    <Link href="/" color="foreground" className="flex justify-center gap-1 items-center">
      <Image
        src="/chickies.png"
        alt="Logo"
        width={48}
        height={48}
        unoptimized
        priority
        quality={100}
      />
      <Text className="font-serif font-semibold text-primary text-xl">Chickies</Text>
    </Link>
  );
};
