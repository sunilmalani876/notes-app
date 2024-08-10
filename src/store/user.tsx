import { create } from "zustand";

const userStore = create((set) => ({
  token: "",
  setToken: (token: string) => set({ token }),
  userState: null,
  setUserState: (userState) => set({ userState }),
}));

export default userStore;
