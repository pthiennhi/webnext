"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Surround, Text } from "@/components/common";

function ErrorPage() {
  return (
    <main>
      <Surround className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <Text className="text-4xl font-bold md:text-5xl" aria-label="404">
          5💡💡
        </Text>
        <Text className="text-center text-4xl font-bold md:text-5xl">
          An Error Occurred
        </Text>
        <Text className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, an error occurred. <br />
          Please visit again later.
        </Text>
        <Link href="/" className="mt-5">
          <Button title="Go Home" color="primary" size="lg" variant="shadow">
            Go Home
          </Button>
        </Link>
      </Surround>
    </main>
  );
}

export default ErrorPage;
