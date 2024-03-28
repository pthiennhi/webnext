import { LOGIN_RESPONSE, Role } from "@/models/auth";
import { LoginService } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: LoginService,
    onSuccess: (res: LOGIN_RESPONSE) => {
      if (res.data) {
        const { accessToken, fullname, role, accountId } = res.data;
        setCookie("accessToken", accessToken, {
          maxAge: 60 * 60,
        });
        setCookie(
          "profile",
          Buffer.from(JSON.stringify({ fullName: "Admin", role:Role.Admin, accountId })).toString(
            "base64",
          ),
          {
            maxAge: 60 * 60,
          },
        );

        router.back();
      }
    },
  });
  return mutation;
};
