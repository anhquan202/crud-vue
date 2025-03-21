import { checkAuth } from "@/services/auth/checkAuth";
import { defineStore } from "pinia";
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticate: false,
  }),
  actions: {
    async isValidUser() {
      try {
        const response = await checkAuth();
        if (response.isAuthenticate) {
          this.isAuthenticate = response.isAuthenticate;
        } else {
          this.isAuthenticate = false;
        }
      } catch (error) {
        console.error(error);
      }
    }
  }
})