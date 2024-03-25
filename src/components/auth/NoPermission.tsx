"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Div, Text } from "@/components/common";

export default function NoPermission() {
  return (
    <main>
      <Div className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <Text className="text-4xl font-bold md:text-5xl" aria-label="404">
          💡💡
        </Text>
        <Text className="text-center text-4xl font-bold md:text-5xl">
          You don't have permission
        </Text>
        <Text className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, you don't have permission to access this page.
          <br />
          Please login or contact the administrator.
        </Text>
        <Link href="/" className="mt-5">
          <Button title="Go Home" color="primary" size="lg" variant="shadow">
            Go Home
          </Button>
        </Link>
      </Div>
    </main>
  );
}
