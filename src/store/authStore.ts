import { Role } from "@/models/auth";
import { deleteCookie } from "cookies-next";
import { create } from "zustand";

interface AuthState {
  accessToken: string;
  fullName: string;
  role: Role;
  isAuth: boolean;
  accountId?: number;
  systemBaseTime?: boolean
}

interface AuthActions {
  setAuth: (auth: AuthState) => void;
  logout: () => void;
  toggleSystemBaseTime: (val : boolean) => void
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: "",
  fullName: "",
  role: Role.Admin,
  isAuth: true,
  accountId: null,
  systemBaseTime : true,
  setAuth: (auth: AuthState) => set(auth),
  logout: () => {
    set({ accessToken: "", fullName: "", role: Role.User, isAuth: false, accountId: null });
    deleteCookie("accessToken");
    deleteCookie("profile");
  },
  toggleSystemBaseTime: ( ) => {
    set((state) => ({ systemBaseTime: !state.systemBaseTime }));
  }
}));
