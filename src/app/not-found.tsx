import Link from "next/link";
import { Button } from "@nextui-org/react";
import { Div, Text } from "@/components/common";

function NotFoundPage() {
  return (
    <main>
      <Div className="flex flex-col items-center py-40 text-zinc-900 dark:text-zinc-50">
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
          <Button title="Go Home" color="primary" size="lg" variant="shadow">
            Go Home
          </Button>
        </Link>
      </Div>
    </main>
  );
}

export default NotFoundPage;
