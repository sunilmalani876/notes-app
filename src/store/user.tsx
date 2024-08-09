import { create } from "zustand";

const userStore = create((set) => ({
  userState: null,
  setUserState: (userState) => set({ userState }),
}));

export default userStore;
