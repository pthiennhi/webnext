import { Role } from "@/models/auth";
import { create } from "zustand";

interface AuthState {
  accessToken: string;
  fullName: string;
  role: Role | null;
  isAuth: boolean;
}

interface AuthActions {
  setAuth: (auth: AuthState) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState & AuthActions>((set) => ({
  accessToken: "",
  fullName: "",
  role: null,
  isAuth: false,
  setAuth: (auth: AuthState) => set(auth),
  logout: () =>
    set({ accessToken: "", fullName: "", role: Role.User, isAuth: false }),
}));
