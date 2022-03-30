import type { User } from "@/helpers/user";
import { defineStore } from "pinia";

/**
 *  Auth state for handling authentication across app
 *
 * @interface AuthState
 */
interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore({
  id: "auth",
  state: (): AuthState => ({
    user: null,
  }),
  getters: {},
  actions: {
    setUser(user: User) {
      this.user = user;
    },
  },
});
