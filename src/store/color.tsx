// @ts-nocheck
import { create } from "zustand";

const colorVariants = [
  { name: "orange", style: "bg-[#ee9b00]" },
  { name: "coral", style: "bg-[#f07167]" },
  { name: "blue", style: "bg-[#90e0ef]" },
  { name: "lime", style: "bg-[#a7c957]" },
  { name: "purple", style: "bg-[#a06cd5]" },
];

const colorStore = create((set) => ({
  colorVariants: colorVariants,
  showColorVariants: false,
  toggleColorVariants: () =>
    set((state) => ({ showColorVariants: !state.showColorVariants })),
}));

export default colorStore;
