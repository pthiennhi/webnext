import { LOGIN_RESPONSE, Role } from "@/models/auth";
import { FakeLoginService, LoginService } from "@/services/auth";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export const useLogin = () => {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const mutation = useMutation({
    // mutationFn: LoginService,
    mutationFn: FakeLoginService,
    onSuccess: (res: LOGIN_RESPONSE) => {
      if (res.data) {
        const { accessToken, fullname, role } = res.data;
        setAuth({
          accessToken,
          fullName: fullname,
          role: role as Role,
          isAuth: true,
        });
        setCookie("fullName", fullname);
        setCookie("role", role); 
        setCookie("accessToken", accessToken);
        router.back();
      }
    },
  });
  return mutation;
};
