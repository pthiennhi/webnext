import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Surround, Text } from "@/components";

function NotFoundPage() {
  return (
    <main>
      <Surround className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
        <Text className="text-4xl font-bold md:text-5xl" aria-label="404">
          4💡4
        </Text>
        <Text className="text-center text-4xl font-bold md:text-5xl">
          Page Not Found
        </Text>
        <Text className="mt-10 text-center text-base font-medium md:text-xl">
          Sorry, the page you are looking for is being updated to provide better
          quality! <br />
          Please visit again later.
        </Text>
        <Link href="/" className="mt-5">
          <Button
            title="Go Home"
            className="rounded-md border border-gray-300 bg-violet-500 px-5 py-2 text-lg font-bold text-gray-50 shadow duration-200 hover:bg-violet-700 dark:border-gray-500 dark:text-gray-50"
          >
            Go Home
          </Button>
        </Link>
      </Surround>
    </main>
  );
}

export default NotFoundPage;
