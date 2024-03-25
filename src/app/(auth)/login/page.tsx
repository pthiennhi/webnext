import { LoginForm } from "@/components/auth";
import { Div, Text } from "@/components/common";
import Image from "next/image";

export default function LoginPage() {
  return (
    <Div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-default-50">
      <Div className="mx-auto w-fit space-y-8 rounded-2xl bg-slate-50 px-8 py-10 shadow-small">
        <Div className="flex flex-col items-center justify-center gap-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="next.svg"
            alt="Logo"
            width={64}
            height={64}
            unoptimized
            priority
            quality={100}
          />
          <Text className="text-center text-2xl font-bold leading-9 tracking-tight text-primary-500">
            Login
          </Text>
        </Div>
        <LoginForm />
      </Div>
    </Div>
  );
}
