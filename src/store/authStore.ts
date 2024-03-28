import { Role } from "@/models/auth";
import { deleteCookie } from "cookies-next";
import { create } from "zustand";

interface AuthState {
  accessToken: string;
  fullName: string;
  role: Role;
  isAuth: boolean;
  accountId?: number;
}

interface AuthActions {
  setAuth: (auth: AuthState) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: "",
  fullName: "",
  role: Role.User,
  isAuth: false,
  accountId: null,
  setAuth: (auth: AuthState) => set(auth),
  logout: () => {
    set({ accessToken: "", fullName: "", role: Role.User, isAuth: false, accountId: null });
    deleteCookie("accessToken");
    deleteCookie("profile");
  },
}));
