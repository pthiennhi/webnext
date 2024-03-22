import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { LoginService } from "@/services/auth";
import { LOGIN_RESPONSE, Role } from "@/models/auth";
import { useAuthStore } from "@/store/authStore";


export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: LoginService,
    onSuccess: (res: LOGIN_RESPONSE) => {
      if (res.data) {
        const { accessToken, fullname, role } = res.data;
        setAuth({
          accessToken,
          fullName: fullname,
          role: role as Role,
          isAuth: true,
        });
        setCookie("accessToken", accessToken);
        router.push("/");
      }
    },
  });
  return mutation;
};
